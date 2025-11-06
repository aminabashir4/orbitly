import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import TrustedSection from './components/trusted'
import Deliver from './components/deliver'
import ClientWorkflowSection from './components/client-work'
import BillingSection from './components/billing'

const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
      <TrustedSection/>
      <Deliver/>
      <ClientWorkflowSection/>
      <BillingSection/>
    </div>
  )
}

export default page
