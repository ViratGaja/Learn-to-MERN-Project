import React from 'react'
import Banner from '../Components/Home/Banner'
import About from '../Components/Home/AboutSection'
import Cards from '../Components/Home/Cards'
import Testimonials from '../Components/Home/Testimonials'

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Cards/>
      <Testimonials/>
      
    </div>
  )
}

export default HomePage