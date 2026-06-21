import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/sections/About'
import WhatWeTrade from './components/sections/WhatWeTrade'
import Capabilities from './components/sections/Capabilities'
import GlobalReach from './components/sections/GlobalReach'
import Compliance from './components/sections/Compliance'
import WhyJeliro from './components/sections/WhyJeliro'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeTrade />
        <Capabilities />
        <GlobalReach />
        <Compliance />
        <WhyJeliro />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
