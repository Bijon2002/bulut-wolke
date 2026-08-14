import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SpezialitaetenPage from './pages/SpezialitaetenPage'
import UeberUnsPage from './pages/UeberUnsPage'
import StandortePage from './pages/StandortePage'
import KontaktPage from './pages/KontaktPage'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'

/** The bar is fixed, so every page except the video hero needs its height back. */
function MainSpacing({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  return (
    <main id="inhalt" className={`flex-1 ${pathname === '/' ? '' : 'pt-20 md:pt-24'}`}>
      {children}
    </main>
  )
}

function ScrollToTopOnRoute() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    AOS.refresh()
  }, [pathname])

  return null
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    // Animation is a bonus, never a requirement: users who ask for reduced
    // motion get the fully rendered page with no reveal animation at all.
    // Windows has "Animation effects" off on a lot of machines, so this can
    // look like the animations are broken. To preview them anyway without
    // changing an OS setting, run in the console:
    //   localStorage.setItem('bw:force-motion', '1'); location.reload()
    const forceMotion = localStorage.getItem('bw:force-motion') === '1'
    const prefersReducedMotion =
      !forceMotion && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      document.documentElement.classList.add('no-reveal')
      return
    }

    try {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        offset: 80,
      })
    } catch {
      // If the animation library fails for any reason, show everything
      // rather than leaving the page blank.
      document.documentElement.classList.add('no-reveal')
    }
  }, [])

  return (
    <div className="page-canvas font-body min-h-screen flex flex-col justify-between">
      <ScrollToTopOnRoute />
      <a href="#inhalt" className="skip-link">
        Zum Inhalt springen
      </a>
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <MainSpacing>
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/spezialitaeten" element={<SpezialitaetenPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/ueber-uns" element={<UeberUnsPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/standorte" element={<StandortePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/kontakt" element={<KontaktPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </MainSpacing>

      <Footer />

      {/* DELICACY ANFRAGE MODAL POPUP */}
      <div className={`modal-overlay ${modalOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
        <div className="modal-card">
          <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
          <div className="modal-body">
            <img src="/fotos/theke-dips-600.jpg" alt="Feinkostplatte von Bulut & Wolke" className="w-36 h-36 object-cover rounded-full shadow-lg" />
            <div className="modal-details">
              <span className="inline-block text-[11px] font-bold tracking-[2.5px] text-[#C9A227] mb-1">
                BULUT & WOLKE SELEKTION
              </span>
              <h3 className="font-heading text-xl font-bold text-[#39482A] mb-2">
                Feinkost Genuss-Set
              </h3>
              <p className="text-xs text-[#4F5E48] leading-relaxed mb-3">
                Handgemachte marinierte Oliven, gefüllte Weinblätter, Antipasti und cremiger Hummus mit nativem Olivenöl.
              </p>
              <div className="modal-price text-lg font-bold text-[#C9A227] mb-3">Auf Anfrage</div>
              <button
                onClick={() => {
                  alert('Vielen Dank! Ihre Anfrage für Bulut & Wolke Feinkost wurde versendet.')
                  setModalOpen(false)
                }}
                className="btn-pill-orange text-xs py-2.5 px-6"
              >
                Jetzt Anfragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
