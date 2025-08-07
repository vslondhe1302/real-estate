"use client"
import React from 'react'
import ContactusTop from './contact-us-components/Contact-us-Top'
import ContactDetails from './contact-us-components/Contact-Details'
export default function page() {

  return (
    <div className='bg-[rgb(248,248,252)]'>
      <div className='lg:pb-[100px] pb-[54px] sm:pt-4 pt-3 lg:px-0 px-4'>
            <div className='max-w-[1170px] mx-auto '>
              <ContactusTop/>
              <ContactDetails/>
            </div>

        </div>
    </div>
  )
}

