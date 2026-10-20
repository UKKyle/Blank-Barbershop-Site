# Launching a new barbershop concept

**Keep this master repository unchanged for real clients.** Copy the files into a new, independent GitHub repository (not a fork) before any branding or outreach. Give each client a unique Worker name and URL.

## Fast client setup

1. Research a trading barbershop, verify its email and assess whether it actually has an existing website. Record evidence; do not guess reviews, opening hours, services or staff.
2. Create a new private GitHub repo for that specific business. Copy this repository into it; do not change the original.
3. Edit **`src/client-config.ts`**. Set `name`, `shortName`, two `headline` lines, `locationLabel`, `tagline`, phone, address, map URL, Facebook URL, opening-hours display plus booking-hours schedule, verified review rating/count, review quotations and gallery photos. Where anything is unverified, keep placeholders.
4. Add rights-cleared files under `public/images/` and adjust the paths in the config. Prefer images provided by the business or explicitly licensed for commercial use; don't scrape photos without permission.
5. To change colours, edit `src/styles.css` (the final `LIGHT MASTER THEME` overrides currently determine most colours). Keep contrast and responsive behaviour intact. The dashboard has its own styling in `public/admin/index.html`.
6. Change the **Worker name** in `wrangler.jsonc` to a new, unique `<client>-preview`. Set up **new GitHub Cloudflare secrets** in the client repository and verify the correct account. Never reuse Mr Handsome's D1 or Access resources.
7. Run `npm install && npm run build`, deploy the client Worker and test desktop/mobile, gallery, terms, preview booking calendar, buttons and contact links. The preview PIN is set in `src/client-config.ts`; note this is only a soft front-end gate, not security.
8. Keep `PREVIEW_ONLY=true` in `worker/index.ts`; demo confirmations must **not** create real appointments. Do not enable production bookings before obtaining owner approval, provisioning an independent D1 database and Access app, and testing contact workflows and email delivery.
9. Prepare a distinct outreach email with the verified business address, non-public preview link and access PIN. **Review before sending.** Track first contact, quote and follow-up. Respect UK B2B marketing rules and opt-outs.

## Important technical boundaries

- `src/client-config.ts` drives website identity, imagery, reviews, opening-hours display and Worker-generated booking hours / email shop identity. The slot generator remains a basic shared one-hour schedule, not a full multi-barber booking engine; confirm each new client's appointment model before enabling bookings.
- The admin dashboard heading is currently generic; change it in the client repo only if desired. Don't expose real admin records on an unprotected public URL.
- The optional services list in config is reference content only (there is no public service-menu component in this version). Static marketing claims and sample reviews must be verified before publication.
- A successful build is not a substitute for browser QA.

## Sales pipeline

`QUALIFIED → DEMO BUILD → QA PASSED → EMAIL DRAFTED → SENT → INTERESTED → QUOTED → WON / CLOSED`.

Start with 3 verified prospects with public business email addresses; aim for 3 polished demos rather than bulk identical cold emails.
