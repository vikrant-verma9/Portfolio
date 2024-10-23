import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4b74tgu', 'template_h2fpzex', form.current, 'qPW_0E-ucGws93kq8')
      .then(() => {
        e.target.reset();
      })
      .catch(error => {
        console.error("Failed to send the message", error);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Vikrant Verma</h5>
            <a href='mailto:vermavikrant954@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Vikrant Verma</h5>
            <a href='mailto:vermavikrant954@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91- 9044607960</h5>
            <a href='https://api.whatsapp.com/send?phone=+919044607960' target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
