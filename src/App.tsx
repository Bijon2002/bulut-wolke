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
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
    })
  }, [])

  return (
    <div className="page-canvas font-body min-h-screen flex flex-col justify-between">
      <ScrollToTopOnRoute />
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/spezialitaeten" element={<SpezialitaetenPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/ueber-uns" element={<UeberUnsPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/standorte" element={<StandortePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/kontakt" element={<KontaktPage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </main>

      <Footer />

      {/* DELICACY ANFRAGE MODAL POPUP */}
      <div className={`modal-overlay ${modalOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
        <div className="modal-card">
          <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
          <div className="modal-body">
            <img src="/assets/feinkost_hero_plate.png" alt="Bulut &amp; Wolke Spezialität" className="w-36 h-36 object-cover rounded-full shadow-lg" />
            <div className="modal-details">
              <span className="inline-block text-[11px] font-bold tracking-[2.5px] text-[#D4AF37] mb-1">
                BULUT &amp; WOLKE SELEKTION
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Feinkost Genuss-Set
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-3">
                Handgemachte marinierte Oliven, gefüllte Weinblätter, Antipasti und cremiger Hummus mit nativem Olivenöl.
              </p>
              <div className="modal-price text-lg font-bold text-[#EE6D52] mb-3">Auf Anfrage</div>
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
