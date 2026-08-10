import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, extname } from 'path'

const SRC = 'public/products'
const DST = 'public/products'

const files = (await readdir(SRC)).filter(f => extname(f) === '.png')
for (const file of files) {
  const src = join(SRC, file)
  const dst = join(DST, file.replace('.png', '_opt.jpg'))
  await sharp(src)
    .resize(800, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(dst)
  console.log(`Compressed: ${file} → ${file.replace('.png', '_opt.jpg')}`)
}
