import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import TrustedSection from './components/trusted'
import Deliver from './components/deliver'

const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
      <TrustedSection/>
      <Deliver/>
    </div>
  )
}

export default page
