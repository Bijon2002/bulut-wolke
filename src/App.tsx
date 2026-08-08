import BackgroundCanvas from './components/BackgroundCanvas'
import Navbar from './components/Navbar'
import ScrollShowcase from './components/ScrollShowcase'
import Products from './components/Products'
import About from './components/About'
import Locations from './components/Locations'
import Quality from './components/Quality'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen text-stone-100 selection:bg-cloud-500 selection:text-white">
      <BackgroundCanvas />
      <Navbar />
      <main className="relative z-10">
        <ScrollShowcase />
        <Products />
        <About />
        <Quality />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
