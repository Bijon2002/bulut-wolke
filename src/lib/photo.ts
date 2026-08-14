/**
 * The client's photos ship in three widths (see scripts/build-fotos.mjs).
 * Components reference the base name and let the browser pick the file.
 */
export const PHOTO_WIDTHS = [600, 1000, 1600] as const

export function photo(base: string, display: 600 | 1000 | 1600 = 1000) {
  return {
    src: `${base}-${display}.jpg`,
    srcSet: PHOTO_WIDTHS.map((w) => `${base}-${w}.jpg ${w}w`).join(', '),
  }
}
