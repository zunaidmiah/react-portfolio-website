import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'


const app = () => {
  return (
    <>
      <Header/>
      <Nav />
      <About/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Testimonials/>
      <Services />
      <Contact/>
      <Footer/>

    </>

  )
}

export default app