# Design Direction — Bulut & Wolke Feinkost

**Project:** WECONN3CT Brief 01 · Revision 2 · August 2026
**Designer:** Bijon

---

## Direction

The name shaped everything. *Bulut* is cloud in Turkish; *Wolke* is cloud in German — a bilingual family identity carried in a single word. The first draft read that as atmosphere and went dark. Revision 2 of the briefing corrected the course: the site should feel like standing in front of a deli counter in daylight, not like a tech product. The current design keeps the cloud idea but expresses it as *light* — bright, warm, Mediterranean, with air around everything.

The audience is local customers aged 30–70, most of them arriving on a phone to check opening hours or find a market stall. That argues for high contrast, generous type, and structure that is obvious at a glance rather than clever.

**Palette.** A cream-white canvas (`#FBF9F2`) carries the page. Yellow (`#E5B93C`) and gold (`#C9A227`) come straight from the client's logo and mark prices, eyebrows, and small accents. Olive green (`#5A6B2F`) handles everything interactive — buttons, links, active navigation — and dark green (`#39482A`) does the heavy text work, giving roughly 9:1 contrast on cream. Soft light blue (`#DCEBF5`) is the cloud: it appears as an alternating section surface and behind the location maps, so the brand name is visible in the layout without ever being said out loud. There is no black background and no navy anywhere on the site.

**Typography.** Playfair Display for headings — a serif reads as craft and longevity, the feel of a hand-labelled jar — set in dark green on light rather than white on dark. Plus Jakarta Sans for body and UI, in a softened olive-ink (`#4F5E48`) instead of pure black.

**Layout.** Five real pages with their own URLs (`/`, `/spezialitaeten`, `/ueber-uns`, `/standorte`, `/kontakt`) plus Impressum and Datenschutz, rather than anchor jumps on one long page. Every page opens with its own hero built on the same organic shapes — rounded plates, torn dividers, cloud forms — so the pages feel like one site without repeating a template. Sections alternate between cream and soft light blue, and image/text sides alternate, so scrolling has rhythm instead of one uniform wall.

**Hero.** The home page opens full-screen on real footage from the shop — the filled counter, the owner behind it, a portion being packed. It autoplays muted, loops, and carries no controls at all; the only thing that stops it is scrolling past, and only to save decoding frames nobody is looking at.

For the first three seconds the footage plays with nothing on top of it. Then a cream plate rises under the centre of the frame and the words settle onto it — eyebrow, headline with a gold brush stroke drawing itself under *Feinkost*, then the sub-line focusing in word by word. The stamp and the scroll cue hold back for the same beat.

That plate is the whole trick. Type over video normally means darkening the video, which was not an option here: the site is dark green on cream, and a dark hero would break the light the brand is named for. Instead the video runs at full strength and only the reading area is veiled *back to cream* — frosted slightly where masking is supported — with soft gradients dissolving the outer edges into the page. The counter stays clearly visible; the headline still clears its contrast. Reduced motion gets the poster frame held still, with the text and the plate present from the first paint.

Because the hero is now full-bleed, the navigation floats transparently over it on the home page and settles into its cream bar after the first scroll.

**Photography.** The generated placeholder art is gone. The counter shots carry the specialties, the two stall photographs carry the locations — visitors on a market square are looking for the stand, not for an address line — and the owner portraits carry the story sections. The closing call to action is the one place the page goes dark: the counter under a deep olive wash, so the invitation reads as the last word rather than one more cream panel.

**The wave that plays.** `/spezialitaeten` opens on the client's illustrated poster — olive branches in the corners, a gold blob, a soft blue wave along the bottom. The poster is portrait and its ornaments live in the corners, so cropping it to a landscape band with `cover` would have thrown away either the branch at the top or the wave at the bottom; the header shows both edges instead and lets the page's cream carry the middle, where the title sits.

The wave itself is not painted blue. It is a window: ten seconds of close-up counter footage — black olives under lemon, red cabbage salad — plays inside it, masked to the wave's own silhouette. That silhouette is traced out of the artwork by `scripts/build-fotos.mjs`, which marks every blue pixel and nothing else, so whatever the illustrator drew *over* the wave — the olive branch, the wave's darker outline — falls outside the mask and goes on sitting on top of the moving picture. Where masks are unsupported the wave simply stays blue.

**Specialties.** `/spezialitaeten` carries the most weight of any page after the home page, so its cards echo the hero: an arched photograph with the name on cream beneath it, the badge floating on the glass, the category set into the shadow at the foot of the image. The category filter rides in a sticky glass rail under the navigation with a live count, and the grid re-focuses on every filter change instead of snapping. The platter configurator's summary is styled as the paper slip from the counter — dark green, gold figures, the chosen sorts listed back as chips.

**Motion.** Reveal animations are decoration, never structure. Everything is fully readable with animation disabled, and anyone with `prefers-reduced-motion` set gets the page with no reveal at all. The animated particle canvas from the first draft is gone — it read as technical, not culinary.

**Maps.** Both market locations embed OpenStreetMap rather than Google Maps. Google's embed sets cookies and transfers data to the US on load, which needs a consent banner under GDPR; OpenStreetMap avoids that entirely on a German site. If the client prefers Google, it should sit behind a click-to-load consent gate.

---

## Uncertainties for the client

1. **Contact form backend.** The form validates client-side but sends nothing. A service (Formspree, Netlify Forms, or a small mail endpoint) needs to be chosen before launch.

2. **Real addresses, coordinates and hours.** The market locations, times and map pins are placeholders and are approximate. The client must confirm exact stall positions, market days and phone numbers.

3. **Product photography — assignment needs confirming.** The site now runs entirely on the client's own shoot: counter, market stall, owner portraits and product stills, plus the hero footage. No stock images remain. What still needs a check is *which* photo sits on which product — the counter shots show the trays as they are arranged on the day, so "Gefüllte Weinblätter" currently carries the nearest matching tray rather than a photograph of that exact item. Six close-ups, one per sort, would settle it.

   The originals (~365 MB) live in `src/assets/Fotos` and never ship. `scripts/build-fotos.mjs` renders the web set into `public/fotos` at three widths, 5.9 MB in total; re-run it after adding a photo.

4. **Impressum and Datenschutz.** The pages and footer links exist as required; the legal content still has to be supplied by the client or their advisor.

5. **Copy.** Per the Revision 2 scope, the German text was left as-is this round and still needs a final pass.
