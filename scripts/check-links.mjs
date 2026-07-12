// Validates evidence links in src/lib/portfolio-data.ts before submission.
// Usage: node scripts/check-links.mjs [--strict]
//   default: warns about placeholders, fails on dirty/editable links
//   --strict: also fails while any placeholder ("#") remains
//
// Rules:
//  1. No Google Docs/Sheets/Slides "/edit" links — evaluators must get view-only.
//  2. No mail/tracking query params (urp=, ts=, usp=sharing_eil, rtpof).
//  3. Placeholders ("#") are reported so none slip into the shared portfolio.

import { readFileSync } from "node:fs";

const strict = process.argv.includes("--strict");
const src = readFileSync(new URL("../src/lib/portfolio-data.ts", import.meta.url), "utf8");

const hrefs = [...src.matchAll(/href:\s*(?:"([^"]*)"|(P)\b)/g)].map((m) => (m[2] ? "#" : m[1]));

let placeholders = 0;
const errors = [];

for (const href of hrefs) {
  if (href === "#") {
    placeholders++;
    continue;
  }
  if (/\/edit\b/.test(href)) {
    errors.push(`EDITABLE link (must be view-only): ${href}`);
  }
  if (/[?&](urp|ts|rtpof|sd)=/.test(href) || /usp=sharing_eil/.test(href)) {
    errors.push(`Tracking/mail params (share a clean link): ${href}`);
  }
  if (!/^https:\/\//.test(href)) {
    errors.push(`Not an https link: ${href}`);
  }
}

console.log(`Checked ${hrefs.length} evidence links.`);
console.log(`Placeholders remaining: ${placeholders}`);
for (const e of errors) console.error(`  ✗ ${e}`);

if (errors.length > 0 || (strict && placeholders > 0)) {
  console.error(
    `\n${errors.length} problem link(s)` +
      (strict && placeholders ? `, ${placeholders} placeholder(s) in strict mode` : "") +
      ". Fix before sharing with CIS.",
  );
  process.exit(1);
}
console.log("All good.");
