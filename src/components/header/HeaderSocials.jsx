import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://www.linkedin.com/in/marwaknurtaj' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/MarwaNurtaj' target='_blank'><FaGithub/></a>
        <a href='marwaknurtaj22@gmail.com' target='_blank'><BiLogoGmail/></a>
        <a href='https://dribbble.com/MKNurtaj' target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials