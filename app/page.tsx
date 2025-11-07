import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import TrustedSection from './components/trusted'
import Deliver from './components/deliver'
import ClientWorkflowSection from './components/client-work'
import BillingSection from './components/billing'
import PricingPlansSection from './components/pricing'

const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
      <TrustedSection/>
      <Deliver/>
      <ClientWorkflowSection/>
      <BillingSection/>
      <PricingPlansSection/>
    </div>
  )
}

export default page
