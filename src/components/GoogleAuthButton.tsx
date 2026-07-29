import { useState } from "react";
import { Check, LogIn, Loader2 } from "lucide-react";
import { useGoogleAuth } from "@/lib/google-auth";

/**
 * Compact reviewer sign-in control for the header. Hidden entirely when no OAuth
 * client ID is configured, so an API-key-only deployment shows nothing extra.
 * Signing in here is optional — evidence folders also prompt on demand — but it
 * lets a reviewer authenticate once up front.
 */
export function GoogleAuthButton() {
  const { configured, ready, signedIn, signIn, signOut } = useGoogleAuth();
  const [busy, setBusy] = useState(false);

  if (!configured) return null;

  async function handleSignIn() {
    setBusy(true);
    try {
      await signIn();
    } catch {
      /* user cancelled or sign-in failed; leave state unchanged */
    } finally {
      setBusy(false);
    }
  }

  if (signedIn) {
    return (
      <button
        onClick={signOut}
        title="Signed in for evidence access. Click to sign out."
        className="inline-flex items-center gap-1.5 rounded-sm border border-rule px-2.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70 hover:text-brand hover:border-brand transition-colors shrink-0"
      >
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">Signed in</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleSignIn}
      disabled={!ready || busy}
      title="Sign in with the Google account you were given evidence access with"
      className="inline-flex items-center gap-1.5 rounded-sm border border-rule px-2.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70 hover:text-brand hover:border-brand transition-colors shrink-0 disabled:opacity-50"
    >
      {busy ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
      ) : (
        <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span className="hidden sm:inline">Reviewer sign-in</span>
      <span className="sm:hidden">Sign in</span>
    </button>
  );
}
