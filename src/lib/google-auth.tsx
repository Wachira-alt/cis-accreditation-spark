import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { GOOGLE_CLIENT_ID } from "@/lib/config";

/**
 * Reviewer sign-in for Google Drive.
 *
 * An API key is anonymous, so Drive only lets it read folders shared with
 * "anyone with the link". To honour per-person sharing we need an identity on
 * the request: the reviewer signs in with Google Identity Services, we receive a
 * short-lived access token, and every Drive call is made AS them. Their browser
 * also gains a Google session, so the file `/preview` iframes render too.
 *
 * The token lives in memory only — it is never persisted — and is re-requested
 * silently when it nears expiry.
 */

const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.readonly";
const GIS_SRC = "https://accounts.google.com/gsi/client";

type TokenResponse = {
  access_token?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
};

type TokenClient = {
  requestAccessToken: (overrides?: { prompt?: string }) => void;
};

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (resp: TokenResponse) => void;
            error_callback?: (err: { type?: string }) => void;
          }) => TokenClient;
        };
      };
    };
  }
}

type AuthState = {
  /** A client ID is configured, so sign-in is possible. */
  configured: boolean;
  /** GIS has loaded and the token client is ready. */
  ready: boolean;
  /** A live (unexpired) token is held. */
  signedIn: boolean;
  /** Trigger the consent flow; resolves with a fresh token (or the current one). */
  signIn: () => Promise<string>;
  /** Drop the in-memory token (does not revoke Google's session). */
  signOut: () => void;
  /** Return a live token, or null if none / expired. */
  getToken: () => string | null;
};

const GoogleAuthContext = createContext<AuthState | null>(null);

/** Inject the Google Identity Services script once, resolving when it is usable. */
function loadGis(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${GIS_SRC}"]`);
  if (existing) {
    return new Promise((resolve) =>
      existing.addEventListener("load", () => resolve(), { once: true }),
    );
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = GIS_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load Google sign-in."));
    document.head.appendChild(s);
  });
}

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const configured = GOOGLE_CLIENT_ID.length > 0;
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const expiryRef = useRef(0);
  const clientRef = useRef<TokenClient | null>(null);
  // Resolver for an in-flight requestAccessToken(); GIS reports back via callback.
  const pendingRef = useRef<{ resolve: (t: string) => void; reject: (e: Error) => void } | null>(
    null,
  );

  useEffect(() => {
    if (!configured) return;
    let cancelled = false;
    loadGis()
      .then(() => {
        if (cancelled) return;
        const oauth2 = window.google?.accounts?.oauth2;
        if (!oauth2) return;
        clientRef.current = oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: DRIVE_SCOPE,
          callback: (resp) => {
            if (resp.error || !resp.access_token) {
              pendingRef.current?.reject(
                new Error(resp.error_description || resp.error || "Sign-in failed."),
              );
              pendingRef.current = null;
              return;
            }
            // Refresh a minute early to avoid using a token that expires mid-request.
            expiryRef.current = Date.now() + (resp.expires_in ?? 3600) * 1000 - 60_000;
            setToken(resp.access_token);
            pendingRef.current?.resolve(resp.access_token);
            pendingRef.current = null;
          },
          error_callback: (err) => {
            pendingRef.current?.reject(new Error(err?.type || "Sign-in was cancelled."));
            pendingRef.current = null;
          },
        });
        setReady(true);
      })
      .catch(() => setReady(false));
    return () => {
      cancelled = true;
    };
  }, [configured]);

  const getToken = useCallback((): string | null => {
    if (token && Date.now() < expiryRef.current) return token;
    return null;
  }, [token]);

  const signIn = useCallback((): Promise<string> => {
    const live = token && Date.now() < expiryRef.current ? token : null;
    if (live) return Promise.resolve(live);
    const client = clientRef.current;
    if (!client) return Promise.reject(new Error("Google sign-in is not ready yet."));
    return new Promise<string>((resolve, reject) => {
      pendingRef.current = { resolve, reject };
      client.requestAccessToken();
    });
  }, [token]);

  const signOut = useCallback(() => {
    setToken(null);
    expiryRef.current = 0;
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      configured,
      ready,
      signedIn: token !== null && Date.now() < expiryRef.current,
      signIn,
      signOut,
      getToken,
    }),
    [configured, ready, token, signIn, signOut, getToken],
  );

  return <GoogleAuthContext.Provider value={value}>{children}</GoogleAuthContext.Provider>;
}

export function useGoogleAuth(): AuthState {
  const ctx = useContext(GoogleAuthContext);
  if (!ctx) throw new Error("useGoogleAuth must be used inside <GoogleAuthProvider>.");
  return ctx;
}
