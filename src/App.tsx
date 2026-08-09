import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SpezialitaetenPage from './pages/SpezialitaetenPage'
import UeberUnsPage from './pages/UeberUnsPage'
import StandortePage from './pages/StandortePage'
import KontaktPage from './pages/KontaktPage'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 text-olive-800 selection:bg-yellow-400 selection:text-olive-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spezialitaeten" element={<SpezialitaetenPage />} />
          <Route path="/ueber-uns" element={<UeberUnsPage />} />
          <Route path="/standorte" element={<StandortePage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
