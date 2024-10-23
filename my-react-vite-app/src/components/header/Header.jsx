import React from 'react'
import './header.css'
import CTA from './CTA'
import MEE from '../../assets/mee.jpeg'
import HeaderSocails from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Vikrant Verma</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
<HeaderSocails />
        <div className='mee'>
          <img src={MEE} alt='mee' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
