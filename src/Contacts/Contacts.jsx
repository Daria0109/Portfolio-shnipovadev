import React from "react";
import s from "./Contacts.module.scss";
import Contact from "./Contact/Contact";
import {FaEnvelope, FaGithub, FaLinkedinIn, FaPhone, FaRocket, FaTelegramPlane, SiCodewars} from "react-icons/all";
import ContactForm from "./Contact/ContactForm";


const Contacts = React.memo(() => {
  return <div className={s.contactsBlock} id='Contacts'>
      <h2 data-aos="fade-up" data-aos-offset="300" data-aos-once="true" className={s.title}>Contact <span>me</span></h2>
    <div className={s.contacts}>
      <Contact icon={<FaRocket color='#4285f4' size='25px'/>} name='My location:'
               info='Minsk city, Republic of Belarus'/>
      <Contact icon={<FaPhone color='#4285f4' size='25px'/>} name='Phone number:' info='+375 29 513 92 66'/>
      <Contact icon={<FaEnvelope color='#4285f4' size='25px'/>} name='Email Address:' info='dshnipova@gmail.com'/>

      <div data-aos-delay="500" data-aos="fade-up" data-aos-once="true" className={s.formBox}>
        <ContactForm/>
        <ul className={s.socialLinks}>
          <li className={s.linkItem}>
            <a className={s.link} href="https://github.com/Daria0109" target='_blank' rel="noreferrer">
              <FaGithub color='#4285f4' size='20px'/>
            </a>
          </li>
          <li className={s.linkItem}>
            <a className={s.link} href="https://www.linkedin.com/in/daria-shnipova-38602b192/" target='_blank'  rel="noreferrer">
              <FaLinkedinIn color='#4285f4' size='20px'/>
            </a>
          </li>
          <li className={s.linkItem}>
            <a className={s.link} href="https://t.me/dasha_shsh" target='_blank'  rel="noreferrer">
              <FaTelegramPlane color='#4285f4' size='20px'/>
            </a>
          </li>
          <li className={s.linkItem}>
            <a className={s.link} href="https://www.codewars.com/users/Daria0109" target='_blank'  rel="noreferrer">
              <SiCodewars color='#4285f4' size='20px'/>
            </a>
          </li>
        </ul>
      </div>

      <div data-aos-delay="500" data-aos="fade-up" data-aos-once="true" className={s.mapBox}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75252.67274842663!2d27.52315760417344!3d53.88472069805786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2sMinsk!5e0!3m2!1sen!2sby!4v1620050090028!5m2!1sen!2sby"
            width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"/>
      </div>
    </div>
  </div>
})
export default Contacts;