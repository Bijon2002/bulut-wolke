/**
 * Turns the client's full-resolution shoot (src/assets/Fotos, ~365 MB) into
 * web-sized derivatives in public/fotos.
 *
 * Run with `node scripts/build-fotos.mjs` after adding or renaming a source
 * photo. The originals stay out of the build; only the outputs ship.
 */
import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join } from 'path'

const SRC = 'src/assets/Fotos'
const OUT = 'public/fotos'
const WIDTHS = [1600, 1000, 600]

/** source file → output basename */
const PICKS = {
  // Counter
  'Theke/Theke-2.jpg': 'theke-oliven-gruen',
  'Theke/Theke-8.jpg': 'theke-oliven-tabletts',
  'Theke/Theke-6.jpg': 'theke-gemuese',
  'Theke/Theke-3.jpg': 'theke-antipasti',
  'Theke/Theke-5.jpg': 'theke-paprika',
  'Theke/Theke-7.jpg': 'theke-dips',
  'Theke/Theke-11.jpg': 'theke-weit',
  'Theke/Theke-13.jpg': 'theke-oliven-detail',
  'Theke/Theke-9.jpg': 'theke-salate',
  'Theke/Theke-12.jpg': 'theke-vitrine',
  // Market stall
  'Außenansicht/Außenansicht-1.jpg': 'stand-front',
  'Außenansicht/Außenansicht-3.jpg': 'stand-seite',
  'Außenansicht/Außenansicht-4.jpg': 'stand-offen',
  'Außenansicht/Außenansicht-5.jpg': 'stand-detail',
  // The family behind the counter
  'Portrait/Portrait-4.jpg': 'inhaber-portrait',
  'Portrait/Portrait-11.jpg': 'inhaber-platte',
  'Portrait/Portrait-7.jpg': 'inhaber-lachen',
  // Product stills
  'Produkte/Produkt-1.jpg': 'produkt-oliven-dunkel',
  'Produkte/Produkt-2.jpg': 'produkt-salat',
  'Produkte/Produkt-3.jpg': 'produkt-olivenoel',
}

mkdirSync(OUT, { recursive: true })

let bytes = 0
for (const [file, name] of Object.entries(PICKS)) {
  for (const w of WIDTHS) {
    const target = join(OUT, `${name}-${w}.jpg`)
    const info = await sharp(join(SRC, file))
      .rotate()
      .resize(w, null, { withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true, progressive: true })
      .toFile(target)
    bytes += info.size
  }
  console.log('✓', name)
}

console.log(`\n${Object.keys(PICKS).length} photos → ${(bytes / 1024 / 1024).toFixed(1)} MB total`)

/* ------------------------------------------------------------------
   The /spezialitaeten poster.

   The illustrator's export has the top wave flattened onto black rather
   than left transparent, so the hole the footage shows through is punched
   back out here: near-black goes clear, and the semi-dark pixels along the
   wave's edge are divided back out of black so the cut leaves no dark
   fringe over the video. Nothing below the top third is touched — the
   whole artwork holds only a handful of stray near-black pixels down there.
   ------------------------------------------------------------------ */
mkdirSync('public/art', { recursive: true })

{
  const { data, info } = await sharp('src/assets/poster-spezial.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const out = Buffer.alloc(width * height * 4)

  for (let i = 0, o = 0; i < data.length; i += channels, o += 4) {
    const y = Math.floor(i / channels / width)
    let [r, g, b] = [data[i], data[i + 1], data[i + 2]]
    let a = 255

    if (y < height * 0.3) {
      const level = Math.max(r, g, b)
      // Clear under 18, fully opaque past 50, ramped between the two.
      a = Math.round(255 * Math.max(0, Math.min(1, (level - 18) / 32)))
      if (a > 0 && a < 255) {
        // Undo the blend with black so the edge does not darken the video.
        const f = 255 / a
        r = Math.min(255, Math.round(r * f))
        g = Math.min(255, Math.round(g * f))
        b = Math.min(255, Math.round(b * f))
      }
    }

    out[o] = r
    out[o + 1] = g
    out[o + 2] = b
    out[o + 3] = a
  }

  // Flat illustration: a palette cuts it to a fraction with no visible loss.
  const { size } = await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toFile('public/art/poster-spezial.png')

  console.log(`✓ poster-spezial.png → ${(size / 1024).toFixed(0)} KB, sky punched out`)
}
