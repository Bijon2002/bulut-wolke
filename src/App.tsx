import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Locations from './components/Locations'
import Quality from './components/Quality'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Quality />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
