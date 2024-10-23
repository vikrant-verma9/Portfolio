import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const HeaderSocails = () => {
    return (
        <div className='header__socails'>
            <a href='https://linkdin.com' target='_blank'><FaLinkedin /></a>
            <a href='https://github.com' target='_blank'><FaGithub /></a>
            <a href='https://dribble.com' target='_blank'><FaDribbble /></a>
        </div>

    )
}

export default HeaderSocails
