import React from 'react'
import './testimonails.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: `Modi alias animi dolorem aliquem ea eum beatae maiores, 
             consectetur paraseneuim quadism, commodi velit.`,  
  },
  {
    avatar: AVTR2,
    name: 'Shhata Wale',
    review: `Modi alias animi dolorem aliquem ea eum beatae maiores, 
             consectetur paraseneuim quadism, commodi velit.`,
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: `Modi alias animi dolorem aliquem ea eum beatae maiores, 
             consectetur paraseneuim quadism, commodi velit.`, 
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: `Modi alias animi dolorem aliquem ea eum beatae maiores, 
             consectetur paraseneuim quadism, commodi velit.`,
  },
]

const Testimonails = () => {
  return (
    <section id='testimonails'>
      <h5>Review From Clients</h5>
      <h2>Testimonails</h2>

      <Swiper className='container testimonails__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonails'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          
          })
      }
       
      </Swiper>
    </section>
  )
}

export default Testimonails
