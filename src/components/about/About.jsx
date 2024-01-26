import React from 'react'
import './About.css'
import ME from '../../assets/ab.png'
import {BiSolidBookReader} from 'react-icons/bi'
import {AiTwotoneFolderOpen} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>get to Know</h5>
      <h2>About Me</h2>

<div className="container about__container">
  <div className='about__me'>
    <div className="about__me-image">
    <img src={ME} alt="About Image" />
    </div>
  </div>

  <div  className='about__content'>
    <div className='about__cards'>

    <article  className='about__card'>
        <FaUserGraduate className='about__icon'/>
        <h5>Graduated From</h5>
        <small>East West University || CSE</small>
    </article>    

    <article  className='about__card'>
        <BiSolidBookReader className='about__icon'/>
        <h5>School & College </h5>
        <small>Viqarunnisa Noon School & College</small>
    </article>

    <article  className='about__card'>
        <AiTwotoneFolderOpen className='about__icon'/>
        <h5>Projects</h5>
        <small>30+ Completed</small>
    </article>      
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Placeat distinctio facilis sunt dolorum odit. Nulla,
        mollitia veritatis ducimus minus iste alias 
        voluptatum delectus sunt eos error repellat 
        doloremque tempora ex voluptates voluptatibus debitis
        at id labore provident nobis. Earum repellat consequuntur nesciunt id harum minima ex labore nobis amet iste?
    </p>

    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
  </div>
</div>

    </section>
  )
}

export default About