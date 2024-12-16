import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/Aboutus'
import Category from './Components/Category'
import Menu from './Components/Menu'
import Chefs from './Components/Chefs'
import Testimonial from './Components/Testimonial'
import Labelpic from './Components/Labelimg'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Category/>
      <Menu/>
      <Chefs/>
      <Testimonial/>
      <Labelpic/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
