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

**Motion.** Reveal animations are decoration, never structure. Everything is fully readable with animation disabled, and anyone with `prefers-reduced-motion` set gets the page with no reveal at all. The animated particle canvas from the first draft is gone — it read as technical, not culinary.

**Maps.** Both market locations embed OpenStreetMap rather than Google Maps. Google's embed sets cookies and transfers data to the US on load, which needs a consent banner under GDPR; OpenStreetMap avoids that entirely on a German site. If the client prefers Google, it should sit behind a click-to-load consent gate.

---

## Uncertainties for the client

1. **Contact form backend.** The form validates client-side but sends nothing. A service (Formspree, Netlify Forms, or a small mail endpoint) needs to be chosen before launch.

2. **Real addresses, coordinates and hours.** The market locations, times and map pins are placeholders and are approximate. The client must confirm exact stall positions, market days and phone numbers.

3. **Product and family photography.** Everything is stock. The briefing asks for large, warm food photography as the primary design element — real counter and family photos would lift the site more than any further design work.

4. **Impressum and Datenschutz.** The pages and footer links exist as required; the legal content still has to be supplied by the client or their advisor.

5. **Copy.** Per the Revision 2 scope, the German text was left as-is this round and still needs a final pass.
