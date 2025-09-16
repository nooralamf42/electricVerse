import HeroSection from "./_components/heroSection"
import ServicesSection from "./_components/servicesSection"
import WhatToExpectSection from "./_components/whatToExpectSection"

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