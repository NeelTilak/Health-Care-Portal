import React from 'react'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'

const About = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="About" text="HealthCare Portal and Healthcare Chatbot"/>
        <Detail />
        <Footer />
    </div>
  )
}

export default About