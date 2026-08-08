# Design Direction — Bulut & Wolke Feinkost

**Project:** WECONN3CT Brief 01 · August 2026  
**Designer:** Bijon (WECONN3CT freelancer)

---

## Direction

The name itself shaped everything. *Bulut* is cloud in Turkish; *Wolke* is cloud in German — a bilingual family identity expressed in one word. The brief asked for a site with its own character, not a Kaya Feinkost clone, and that duality gave a clear starting point: a dark, atmospheric ground with a cool blue-slate accent — the colour of sky near clouds — rather than the warm terracotta and cream that dominate the Feinkost category.

The target audience is local customers aged 30–70. That ruled out a purely minimalist or brutalist approach — the site needed warmth and legibility alongside the atmosphere. The solution was depth over flatness: dark stone-toned backgrounds with translucent card layers and backdrop blur, so the content feels grounded and premium without being cold.

**Palette.** Near-black stone (`#0c0a09`) as the canvas. A cool blue-slate (`#5a8fa3`, branded as `cloud`) for accents, active states, and section eyebrows — it reads as the sky, which connects directly to the name. Supporting neutrals are stone-biased greys (not pure grey), keeping warmth in the text even on a dark ground.

**Typography.** Display headings use a serif with tight tracking (`font-display`) to signal craft and longevity — the feel of a label on a handmade jar. Body and UI copy uses a clean sans-serif for legibility at small sizes. The contrast between the two avoids the all-sans flatness that dominates generic food-brand sites.

**Layout.** The hero is a scroll-pinned full-screen sequence: four phases of copy dissolve in and out as the user scrolls, timed to a background video of food preparation. This slows the visitor down and sets an unhurried, artisanal tone before they reach the product grid. Everything else is structured as floating glass cards — consistent rounded radius, subtle border, backdrop blur — which creates hierarchy without heavy dividers.

**Motion.** Scroll-triggered AOS reveals on all sections (fade-up, slide-in) keep the page feeling alive on first load without looping animations that would distract in a deli context.

---

## Uncertainties for the client

1. **Contact form backend.** Currently, the form validates client-side but does not send data anywhere. A form service (Formspree, Netlify Forms, or a simple email endpoint) needs to be chosen and integrated before launch.

2. **Real addresses and phone numbers.** Placeholder contact details (Kaiserstraße 42, Siegburg and Marktplatz 8, Sankt Augustin) are used. The client must confirm exact addresses, opening hours, and phone numbers for both locations.

3. **Product photography.** Stock images are used throughout. Real product photos from the deli counter would significantly strengthen the site — especially for the hero video and the About section image.

4. **Impressum and Datenschutz.** German law requires an Imprint (Impressum) and Privacy Policy. These pages are linked in the footer but not yet written. The client or their legal advisor needs to provide the content.

5. **Dark-only design.** The current design commits to a dark visual world. If the client prefers a light version for a warmer, more approachable feel for the older end of the 30–70 age range, the palette and card system can be adapted — but this would be a meaningful redesign, not a quick toggle.
