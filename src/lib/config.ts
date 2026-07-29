// Runtime configuration for the portfolio site.

/**
 * Browser-restricted Google API key used to list Drive folder contents for the
 * in-app gallery (Community Voices, evidence folders, etc.).
 *
 * Set up:
 *  1. Google Cloud Console -> create/select a project.
 *  2. Enable "Google Drive API".
 *  3. Credentials -> Create credentials -> API key.
 *  4. Restrict the key: Application restrictions -> Websites -> add your domain
 *     (e.g. https://cis.woodcreekschool.sc.ke/*) and localhost for dev.
 *     API restrictions -> restrict to "Google Drive API".
 *  5. Add it to a .env file at the project root:  VITE_GOOGLE_API_KEY=your_key_here
 *
 * The media folders must be shared as "anyone with the link" for the key to read them.
 * If a folder's gallery comes back empty, open it in Drive and confirm link-sharing is on.
 */
const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};
export const GOOGLE_API_KEY: string = (env.VITE_GOOGLE_API_KEY ?? "").trim();

/**
 * Google OAuth 2.0 Client ID for reviewer sign-in. Unlike the API key (which can
 * only read folders shared "anyone with the link"), signing in lets a reviewer
 * open folders that were shared privately with their own Google account — the app
 * lists the folder AS them, so per-person Drive sharing is honoured.
 *
 * Set up:
 *  1. Google Cloud Console -> same project as the API key.
 *  2. APIs & Services -> OAuth consent screen -> External. While in "Testing",
 *     add each reviewer's email under "Test users" (up to 100). No Google
 *     verification is needed for a private test-user list.
 *  3. Credentials -> Create credentials -> OAuth client ID -> Web application.
 *     Authorised JavaScript origins: your domain (e.g. https://cis.woodcreekschool.sc.ke)
 *     and http://localhost:3000 (or whatever port `vite dev` prints) for local work.
 *  4. Add it to .env:  VITE_GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
 *
 * The Drive folders no longer need "anyone with the link" — share them directly
 * with each reviewer's Google account instead.
 */
export const GOOGLE_CLIENT_ID: string = (env.VITE_GOOGLE_CLIENT_ID ?? "").trim();

/** True when the in-app Drive gallery can work at all — via a public API key or reviewer sign-in. */
export const DRIVE_ENABLED: boolean = GOOGLE_API_KEY.length > 0 || GOOGLE_CLIENT_ID.length > 0;

/**
 * Google Form embed URL for CIS feedback on Part 3.
 * In the Google Form: Send -> embed (<>) -> copy the src URL
 * (it ends with /viewform?embedded=true). Paste it between the quotes below.
 */
export const CIS_FEEDBACK_FORM_URL: string = "";

/**
 * Password for documents labelled "(Restricted)" (the financial F-documents).
 * NOTE: client-side gate only — it deters casual access, but the value ships in the browser
 * bundle, so it is not real security. True protection comes from each Drive file being shared
 * with specific people only. Use it as a light barrier, not a vault.
 */
export const RESTRICTED_PASSWORD: string = "Rloft@135";
