import { useEffect, useRef, useState, useCallback } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface AnimatedLocationMapProps {
  coords: [number, number]
  name: string
  address: string
  city: string
  badge?: string
  hours?: string
  className?: string
}

// Initial world center & zoom level for the dramatic fly-in
const WORLD_CENTER: [number, number] = [32.0, 15.0]
const WORLD_ZOOM = 2.5
const TARGET_ZOOM = 16

export default function AnimatedLocationMap({
  coords,
  name,
  address,
  badge = 'Marktstand',
  hours,
  className = '',
}: AnimatedLocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)
  const hasAnimatedRef = useRef<boolean>(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAtWorldView, setIsAtWorldView] = useState(true)

  // Helper to create custom HTML pin icon with radar ripple rings
  const createCustomIcon = useCallback(() => {
    return L.divIcon({
      className: 'custom-map-marker-container',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -100%); width: 56px; height: 56px; cursor: pointer;">
          <!-- Pulse radar wave -->
          <span style="position: absolute; bottom: 4px; width: 40px; height: 40px; border-radius: 9999px; background: rgba(201, 162, 39, 0.4); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
          <span style="position: absolute; bottom: 4px; width: 32px; height: 32px; border-radius: 9999px; background: rgba(57, 72, 42, 0.3);"></span>
          
          <!-- Pin body -->
          <div style="position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2));">
            <div style="width: 40px; height: 40px; border-radius: 9999px; background: #39482A; border: 2.5px solid #C9A227; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FBF0C4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
                <circle cx="12" cy="10" r="3" fill="#C9A227"/>
              </svg>
            </div>
            <!-- Pin tip -->
            <div style="width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 8px solid #39482A; margin-top: -2px;"></div>
          </div>
        </div>
      `,
      iconSize: [56, 56],
      iconAnchor: [28, 56],
      popupAnchor: [0, -56],
    })
  }, [])

  // Create popup HTML
  const createPopupContent = useCallback((locName: string, locAddress: string, locBadge: string, locHours?: string) => {
    return `
      <div style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif; padding: 4px; min-width: 190px;">
        <div style="display: inline-block; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: #FEF9EC; color: #C9A227; border: 1px solid #F7E08B; padding: 2px 8px; border-radius: 9999px; margin-bottom: 6px;">
          ${locBadge}
        </div>
        <h4 style="font-family: 'Playfair Display', Georgia, serif; font-size: 15px; font-weight: 700; color: #39482A; margin: 0 0 4px 0; line-height: 1.2;">
          ${locName}
        </h4>
        <p style="font-size: 11px; color: #4F5E48; margin: 0 0 6px 0; line-height: 1.3;">
          📍 ${locAddress}
        </p>
        ${locHours ? `<p style="font-size: 10px; color: #5A6B2F; font-weight: 600; margin: 0 0 6px 0;">⏰ ${locHours}</p>` : ''}
        <a 
          href="https://maps.google.com/?q=${encodeURIComponent(locAddress)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          style="display: inline-block; font-size: 11px; font-weight: 600; color: #C9A227; text-decoration: underline; margin-top: 2px;"
        >
          In Google Maps öffnen →
        </a>
      </div>
    `
  }, [])

  // Fly-to target function
  const flyToTarget = useCallback((targetCoords: [number, number], zoom = TARGET_ZOOM, duration = 3.5) => {
    const map = mapRef.current
    if (!map) return

    setIsAnimating(true)
    if (markerRef.current) {
      markerRef.current.closePopup()
    }

    map.flyTo(targetCoords, zoom, {
      duration,
      easeLinearity: 0.22,
      noMoveStart: false,
    })

    const onFlyEnd = () => {
      setIsAnimating(false)
      setIsAtWorldView(false)
      if (markerRef.current) {
        markerRef.current.openPopup()
      }
      map.off('moveend', onFlyEnd)
    }

    map.on('moveend', onFlyEnd)
  }, [])

  // Replay flight from world view
  const replayFlyIn = () => {
    const map = mapRef.current
    if (!map || isAnimating) return

    if (markerRef.current) {
      markerRef.current.closePopup()
    }

    setIsAtWorldView(true)
    map.setView(WORLD_CENTER, WORLD_ZOOM, { animate: false })

    setTimeout(() => {
      flyToTarget(coords, TARGET_ZOOM, 3.5)
    }, 150)
  }

  // Initialize Map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    // Initialize map at World View
    const map = L.map(containerRef.current, {
      center: WORLD_CENTER,
      zoom: WORLD_ZOOM,
      zoomControl: false,
      scrollWheelZoom: false, // Avoid hijacking page scroll
      attributionControl: false,
    })

    // Add clean OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    // Add zoom controls to top right
    L.control.zoom({ position: 'topright' }).addTo(map)

    // Add marker at target coords
    const customIcon = createCustomIcon()
    const marker = L.marker(coords, { icon: customIcon }).addTo(map)
    marker.bindPopup(createPopupContent(name, address, badge, hours), {
      closeButton: true,
      autoPan: true,
    })

    mapRef.current = map
    markerRef.current = marker

    // IntersectionObserver to trigger fly-in upon scrolling into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true
          // Small delay before smooth flight begins
          setTimeout(() => {
            flyToTarget(coords, TARGET_ZOOM, 3.5)
          }, 300)
        }
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      map.remove()
      mapRef.current = null
      markerRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle location coordinate / info changes (e.g. switching tabs)
  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return

    markerRef.current.setLatLng(coords)
    markerRef.current.setPopupContent(createPopupContent(name, address, badge, hours))

    if (hasAnimatedRef.current) {
      // Smoothly fly to the new market location
      flyToTarget(coords, TARGET_ZOOM, 1.8)
    }
  }, [coords, name, address, badge, hours, createPopupContent, flyToTarget])

  return (
    <div className={`relative isolate rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-[#E8F0F6] ${className}`}>
      {/* Map Canvas */}
      <div
        ref={containerRef}
        className="w-full h-[300px] sm:h-[360px] md:h-[400px] z-0"
        style={{ cursor: isAnimating ? 'wait' : 'grab' }}
      />

      {/* Flight animation indicator & controls */}
      <div className="absolute top-3 left-3 z-[1000] flex items-center gap-2 pointer-events-auto">
        <button
          onClick={replayFlyIn}
          disabled={isAnimating}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md ${
            isAnimating
              ? 'bg-[#39482A] text-white animate-pulse'
              : 'bg-white/90 text-[#39482A] border border-black/10 hover:bg-[#39482A] hover:text-white'
          }`}
          title="Zoom-Animation aus der Weltansicht erneut abspielen"
        >
          <span className={`inline-block transition-transform duration-700 ${isAnimating ? 'rotate-[360deg]' : ''}`}>
            🌍
          </span>
          <span>{isAnimating ? 'Flug zu Standort...' : 'Zoom animieren'}</span>
        </button>

        {isAtWorldView && !isAnimating && (
          <span className="hidden sm:inline-flex items-center text-[10px] font-semibold bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
            Scrollen zum Einfliegen
          </span>
        )}
      </div>

      {/* Location overlay badge on bottom left */}
      <div className="absolute bottom-3 left-3 z-[1000] pointer-events-none max-w-[80%]">
        <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-black/5 shadow-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="text-[11px] font-bold text-[#39482A] truncate">
            {name}
          </span>
        </div>
      </div>
    </div>
  )
}
