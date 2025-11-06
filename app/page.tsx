import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import TrustedSection from './components/trusted'

const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
      <TrustedSection/>
    </div>
  )
}

export default page
