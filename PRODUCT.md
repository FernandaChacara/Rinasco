# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js (React) — chosen for a production rental site that needs server-rendered pages for property listings and SEO, straightforward payment integration (e.g. Stripe), and a component/business-logic base that can later extend to React Native for the planned iOS/Android apps. The user deferred the specific framework choice to this build.

## Users

Primary users are people looking to rent a house — initially for vacation stays, with the same product expected to later support long-term/residential rentals. They need to check a property's availability, contact the owner/manager, and be able to pay for the booking directly on the site.

## Product Purpose

Rinasco lets a property owner/manager list rental houses and lets renters browse them, see availability, get in touch, and complete payment online — collapsing the usual multi-step rental inquiry (browse → call → negotiate → pay offline) into one flow.

## Positioning

Presents each property inside a 3D environment that conveys a premium, high-end feel, rather than the static photo galleries competitors typically use — meant to make the space and the brand feel premium before the visitor ever makes contact.

## Operating Context

- Vacation-rental use case first; long-term/residential rental support is a stated future direction, not yet in scope for this build.
- Core booking flow: browse properties, view availability, contact, and pay on-site.
- A 3D presentation of each property is a core part of the experience, not a decorative add-on.

## Capabilities and Constraints

- Confirmed: availability display, contact mechanism, on-site payment, 3D property visualization.
- Future (explicitly out of scope for now): native iOS and Android apps, once the web site is real and functional.
- Undecided: payment provider, number of properties/owners, whether this is a single-owner site or a multi-owner marketplace.

## Brand Commitments

"Rinasco" is a working name only — the user is open to changing it to something more premium. No logo, existing visual assets, or locked identity yet.

## Evidence on Hand

None yet — no real property data, photos, copy, or testimonials exist. Future work must not fabricate listings, prices, or reviews; use clearly marked placeholder content until real data is provided.

## Product Principles

1. Every property should feel premium and trustworthy at first glance — the 3D presentation is central to that, not an add-on.
2. Reduce the booking flow to browse → see availability → contact/pay, with no offline detour required.
3. Build for the vacation-rental case now without foreclosing an extension to long-term rentals later.
4. Keep the web product and the future native apps sharing product logic where reasonable, since both are committed.
