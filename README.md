# Barbershop Base

An independent, reusable barbershop website and appointment-management foundation.

**This is the permanent blank master.** Never customise it for a specific business. Create a separate repository for each new client and customise that copy instead.

## Included
- Responsive website, gallery and service presentation
- Appointment-selection journey, email field, arrival terms and preview-only confirmation
- Cloudflare Worker booking API with database-backed availability, optional Resend/Turnstile integration
- Cloudflare Access-protected staff dashboard: Today, Availability and Activity (seven-day browsing)
- Assign barbers, block/reopen times, and log booking changes

## Safety by default
- `PREVIEW_ONLY=true` in `worker/index.ts`: public booking requests are rejected and the customer form shows a demo confirmation.
- `wrangler.jsonc` contains **no D1 database binding or real account identifiers**.
- No Cloudflare Access credentials, emails, production sender address or API secrets.
- No customer data, client photographs, reviews or verified business profile details.
- No auto-deployment workflow. Configure deployment only in a client's own repository.

## Starting a client
1. Duplicate this repository into a **new private repository** (do not fork it with an ongoing upstream link).
2. Replace all placeholder branding, approved gallery pictures, legitimate business details, opening hours and verified reviews.
3. Provision that client's *own* Cloudflare Worker, D1 database, Access application and domain. Add the D1 binding only to their configuration.
4. Apply `booking-backend/schema.sql` and `migrations/` as appropriate to a fresh client database, and check the admin audit schema.
5. Keep preview mode active until the owner approves opening hours, appointment capacity and email policy.
6. After verifying domain and Resend sender, configure Turnstile and CF Access/allowlists, then test booking, email, cancel, availability, assignments, audit, device accessibility and backup restoration.
7. Switch `PREVIEW_ONLY` off deliberately only after launch checks pass.

The template includes unverified **example** content that must be replaced and reviewed before any live deployment.
