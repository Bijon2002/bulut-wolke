import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync, rmSync } from 'fs'
import { join } from 'path'

// public/desk frame_000001..000004 are leftover 3x3 storyboard contact-sheet
// exports, not real single frames — skip them so the animation stays clean.
const jobs = [
  { src: 'public/desk', dest: 'public/frames/desk', width: 960, quality: 68, skipFirst: 4 },
  { src: 'public/mobile', dest: 'public/frames/mobile', width: 540, quality: 68, skipFirst: 2 },
]

for (const job of jobs) {
  if (existsSync(job.dest)) rmSync(job.dest, { recursive: true })
  mkdirSync(job.dest, { recursive: true })
  const files = readdirSync(job.src).filter((f) => f.endsWith('.png')).sort().slice(job.skipFirst)
  console.log(`${job.src}: ${files.length} frames (skipped ${job.skipFirst})`)
  let i = 0
  for (const file of files) {
    const idx = String(i + 1).padStart(4, '0')
    const out = join(job.dest, `f${idx}.jpg`)
    await sharp(join(job.src, file))
      .resize({ width: job.width })
      .jpeg({ quality: job.quality, mozjpeg: true })
      .toFile(out)
    i++
    if (i % 40 === 0) console.log(`  ${i}/${files.length}`)
  }
  console.log(`${job.dest}: done (${i} frames)`)
}
