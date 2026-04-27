import Experience from '@/components/home/Experience'
import Hero from '@/components/home/Hero'
import PaySlider from '@/components/home/Pay'
import Services from '@/components/home/Services'
import Work from '@/components/home/Work'
import React from 'react'


const Page = () => {
  return (
    <div>
       <Hero/>
       <Experience/>
      <Services/>
      <PaySlider/>
      
    </div>
  )
}

export default Page