import Comments from '@/components/about/Comment'
import Hero from '@/components/about/Hero'
import Plan from '@/components/about/Plan'
import Value from '@/components/about/Value'
import Vison from '@/components/about/Vison'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Hero/>
      <Vison/>
      <Value/>
      <Plan/>
      <Comments/>
    </div>
  )
}

export default Page