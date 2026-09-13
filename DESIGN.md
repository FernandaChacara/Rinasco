# Design

Direction for the Rinasco landing page (`app/page.tsx` and its section
components under `app/components/`).

## World: the auction catalog

The audience — people who rent luxury vacation homes and "know the
difference" — reads provenance and rarity fluently. The visual world borrows
from auction-house catalogs and lot pages rather than the generic vacation-
rental template: each property is a numbered "lot" with a provenance-style
meta line, not a card in a grid. This ties directly to the brief's own
"origem única" framing — a lot has one origin, never a duplicate.

## Palette — Committed strategy

- `--ink` / `--ink-panel` / `--ink-deep`: a deep bottle-green field, not
  near-black or warm cream, carrying most of the surface.
- `--paper`: a warm, light ground used only for the Collection section, to
  vary density against the dark sections around it.
- `--brass` / `--brass-bright`: a muted brass used only for hairlines, lot
  numerals, and the primary action — never as a filled gradient.

## Type

- Display: **Bodoni Moda** (a real didone, auction-catalog/masthead
  register) for headlines, lot numbers, and property names.
- UI/body: **Archivo**, a neutral grotesque workhorse for nav, meta lines,
  and body copy.

Both were chosen to avoid the common AI-default faces (Fraunces, Playfair,
Cormorant, Inter-as-display, Space Grotesk, etc.).

## Signature interaction

A fixed vertical "Lote NN / 04" indicator (`ScrollFx.tsx`) tracks which lot
— the hero and the three collection properties — is in view via
`IntersectionObserver`, echoing an auction paddle/lot counter. Section
content fades/rises in on first scroll intersection (`[data-reveal]`),
respecting `prefers-reduced-motion`.

## Illustration

Property "photos" are hand-authored line-art elevations
(`components/Elevation.tsx`, inline SVG) rather than invented photographs —
a deliberate placeholder that fits the provenance/blueprint motif instead of
faking real estate photography that doesn't exist yet.

## What is placeholder, not product truth

- The three collection entries (Casa Vidro-Sul, Ancoradouro Norte, Refúgio
  da Serra Alta) are invented example listings — names, facts, and
  descriptions — standing in for real properties. Replace with real data
  before shipping.
- All prices read "Sob consulta" — no price was invented, per `PRODUCT.md`
  (no evidence on hand yet).
- The contact form (`Cta.tsx`) only sets local state on submit; it is not
  wired to a backend or notification flow yet.
- The 3D property walkthrough described in the copy is not yet built; the
  copy states it as a promise the product still needs to deliver on.
