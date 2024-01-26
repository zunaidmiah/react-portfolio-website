import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/salam.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Marwa Khanom Nurtaj</h1>
        <h5 class='test-light'>Web Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
            <img src={ME} alt='my-avatar'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header