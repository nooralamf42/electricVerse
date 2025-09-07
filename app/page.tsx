import HeroSection from "./components/heroSection"
import ServicesSection from "./components/servicesSection"
import WhatToExpectSection from "./components/whatToExpectSection"

const Homepage = () => {
  return (
    <main className='container mx-auto px-4'>
      <HeroSection />
      <ServicesSection />
      <WhatToExpectSection />
    </main>
  )
}

export default Homepage