import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
