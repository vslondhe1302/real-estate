import React from 'react'
import AboutUsTop from './about-us-components/AboutUsTop'
import FounderJourney from './about-us-components/FounderJourney'
import BrokerInfo from './about-us-components/BrokerInfo'

export default function page() {
  return (
    <div className=''>
      <AboutUsTop/>
      <FounderJourney/>
      <BrokerInfo/>      
    </div>
  )
}

