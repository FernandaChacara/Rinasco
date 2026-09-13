# Design

Direction for the Rinasco landing page (`app/page.tsx` and its section
components under `app/components/`). This replaces the previous
auction-catalog world entirely — it was rejected by the user, not extended.

## World: quiet luxury, no regional costume

The brief explicitly asked to drop any overt "Portuguese" theming (no
azulejo-tile motif, no maritime/heritage narrative) in favor of something
luxurious and premium that stands on its own. The direction leans instead on
the one thing that is genuinely, specifically true: the real property's own
palette and the promise of real photography over staged or invented imagery.

## Palette — Committed strategy

- `--ink` / `--ink-panel`: a warm, light plaster ground (not the common
  AI-default cream) — the default background for most sections.
- `--paper` (aliased to `--celadon-deep`): a deep celadon green, sampled
  from the real bedroom wall and bathroom tile in the property photos. Used
  as a full committed field for the Collection section, not a decorative
  accent — this is genuine material from the actual house, not a
  Portuguese-tile reference.
- `--ink-deep`: a near-black celadon-charcoal, used only for the Cta and
  Footer sections, to give the page one deliberately dark moment near the
  end rather than staying dark throughout.
- `--brass` / `--brass-bright`: warm brass, kept from the previous
  direction as a universal luxury-metal accent for hairlines and the
  primary action — it isn't regionally coded, so it survived the reset.

## Type

- Display: **Ibarra Real Nova** — an editorial serif with real character,
  distinct from the previous Bodoni Moda.
- UI/body: **Manrope** — a clean humanist sans, distinct from the previous
  Archivo.

## Photography, not illustration or abstract 3D

The previous direction used hand-drawn line-art elevations, then later
procedural Three.js house models, because no real property material
existed yet. Real photos of one property now exist (`public/property-01/`)
and lead the page: the Hero uses a real photo as its full visual (not a
3D scene or illustration), and the Collection section is a photo gallery of
the actual rooms. `Elevation.tsx` and `HouseScene.tsx` were removed along
with the `three` dependency — they have no role in this direction.

## What is placeholder, not product truth

- Only one real property exists (`public/property-01/`). The Collection
  section shows it alone; there's no fabricated second or third listing.
- Room count, exact location, and price are marked "a confirmar" / "sob
  consulta" — not invented, per `PRODUCT.md`.
- The contact form (`Cta.tsx`) only sets local state on submit; it isn't
  wired to a backend yet.
- The interactive 3D walkthrough named in `PRODUCT.md` as a confirmed
  product requirement is not implemented and not promised in any current
  copy — its production method (360° capture, scan, etc.) is still
  undecided and needs real capture material beyond static photos.
