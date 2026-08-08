import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, extname } from 'path'

const SRC = 'public/products'
const files = (await readdir(SRC)).filter(f => extname(f) === '.png')

for (const file of files) {
  const src = join(SRC, file)
  const dst = join(SRC, file.replace('.png', '_sm.jpg'))
  const { size } = await sharp(src)
    .resize(380, null, { withoutEnlargement: true })
    .jpeg({ quality: 35, mozjpeg: true })
    .toFile(dst)
  console.log(`${file} → ${file.replace('.png', '_sm.jpg')} (${Math.round(size/1024)}KB)`)
}
