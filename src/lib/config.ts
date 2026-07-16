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
