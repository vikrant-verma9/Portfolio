import React from 'react'
import './about.css'
import Mee from '../../assets/mee-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Mee} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
           
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>

              <FiUser className='about__icon'/>
             <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about__card'>
            <VscFolder className=''/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod voluptatibus excepturi
            veniam officiis expedita fugit rerum aliquid debitis molestias doloribus ducimus ipsam ut
            pariatur totam, cupiditate aut, voluptas eligendi?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About
