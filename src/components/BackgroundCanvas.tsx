import { useEffect, useRef, useState } from 'react'

const FRAME_COUNTS = { desk: 236, mobile: 238 }

export default function BackgroundCanvas() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const loadedRef = useRef<boolean[]>([])
  const rafRef = useRef<number | null>(null)
  const frameCountRef = useRef(isMobile ? FRAME_COUNTS.mobile : FRAME_COUNTS.desk)
  const [firstFrameReady, setFirstFrameReady] = useState(false)

  // Responsive breakpoint tracking
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Frame loading based on resolution
  useEffect(() => {
    const prefix = isMobile ? '/frames/mobile/f' : '/frames/desk/f'
    const frameCount = isMobile ? FRAME_COUNTS.mobile : FRAME_COUNTS.desk
    frameCountRef.current = frameCount
    loadedRef.current = new Array(frameCount).fill(false)
    setFirstFrameReady(false)

    const images: HTMLImageElement[] = []
    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      const idx = String(i + 1).padStart(4, '0')
      img.src = `${prefix}${idx}.jpg`
      img.onload = () => {
        loadedRef.current[i] = true
        if (i === 0) {
          setFirstFrameReady(true)
          renderCurrentScrollFrame()
        }
      }
      img.onerror = () => {
        if (i === 0) setFirstFrameReady(true)
      }
      images.push(img)
    }
    imagesRef.current = images

    return () => {
      imagesRef.current = []
    }
  }, [isMobile])

  // Draw frame on canvas with aspect cover scaling
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    let i = Math.max(0, Math.min(frameCountRef.current - 1, index))
    while (i > 0 && !loadedRef.current[i]) i--

    const img = imagesRef.current[i]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const cw = window.innerWidth
    const ch = window.innerHeight

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr
      canvas.height = ch * dpr
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const imgRatio = img.naturalWidth / img.naturalHeight
    const canvasRatio = cw / ch
    let drawW: number, drawH: number, offX: number, offY: number

    if (imgRatio > canvasRatio) {
      drawH = ch
      drawW = ch * imgRatio
      offX = (cw - drawW) / 2
      offY = 0
    } else {
      drawW = cw
      drawH = cw / imgRatio
      offX = 0
      offY = (ch - drawH) / 2
    }

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, offX, offY, drawW, drawH)
  }

  const renderCurrentScrollFrame = () => {
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    const currentScrollY = Math.max(0, window.scrollY)
    const rawProgress = totalScrollableHeight > 0 ? currentScrollY / totalScrollableHeight : 0
    const clampedProgress = Math.max(0, Math.min(1, rawProgress))

    const count = frameCountRef.current
    const frameIndex = Math.min(count - 1, Math.floor(clampedProgress * (count - 1)))
    drawFrame(frameIndex)
  }

  // Scroll and Resize Event Listener
  useEffect(() => {
    const onScrollOrResize = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        renderCurrentScrollFrame()
      })
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    renderCurrentScrollFrame()

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10] bg-stone-950 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* Black overlay layer to smooth out pixelation & frame compression artifacts */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-transparent to-stone-950/60 pointer-events-none" />

      {!firstFrameReady && (
        <div className="absolute inset-0 bg-stone-950 flex items-center justify-center pointer-events-auto z-50">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-2 border-cloud-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-stone-400 text-xs tracking-widest uppercase font-medium">Bulut & Wolke</p>
          </div>
        </div>
      )}
    </div>
  )
}
