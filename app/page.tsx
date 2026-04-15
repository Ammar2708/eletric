import Experience from '@/components/home/Experience'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Work from '@/components/home/Work'
import React from 'react'
import Projects from '../components/home/Projects'

const Page = () => {
  return (
    <div>
       <Hero/>
       <Experience/>
      <Services/>
      {/* <Projects/> */}
      
    </div>
  )
}

export default Page