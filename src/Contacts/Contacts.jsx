import React, {useEffect} from "react";
import s from "./Contacts.module.scss";
import Contact from "./Contact/Contact";
import {FaEnvelope, FaGithub, FaLinkedinIn, FaPhone, FaRocket, FaTelegramPlane, SiCodewars} from "react-icons/all";
import ContactForm from "./Contact/ContactForm";
import MapContainer from "./Map/MapContainer";
import AOS from "aos";


const Contacts = React.memo(() => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      delay: 100,
      once: false,
    });
    AOS.refresh()
  }, [])

  return <div className={s.contactsBlock} id='Contacts'>
      <h2 className={s.title} data-aos="fade-in">Contact <span>me</span></h2>
      <div className={s.contacts}>
        <Contact icon={<FaRocket color='#4285f4' size='25px'/>} name='My location:'
                 info='Minsk city, Republic of Belarus'/>
        <Contact icon={<FaPhone color='#4285f4' size='25px'/>} name='Phone number:' info='+375 29 513 92 66'/>
        <Contact icon={<FaEnvelope color='#4285f4' size='25px'/>} name='Email Address:' info='emailemail@gmail.com'/>

        <div className={s.formBox} data-aos="fade-in">
          <ContactForm/>
          <ul className={s.socialLinks}>
            <li className={s.linkItem}>
              <a className={s.link} href="https://github.com/Daria0109" target='_blank'>
                <FaGithub color='#4285f4' size='20px'/>
              </a>
            </li>
            <li className={s.linkItem}>
              <a className={s.link} href="https://www.linkedin.com/in/daria-shnipova-38602b192/" target='_blank'>
                <FaLinkedinIn color='#4285f4' size='20px'/>
              </a>
            </li>
            <li className={s.linkItem}>
              <a className={s.link} href="https://t.me/dasha_shsh" target='_blank'>
                <FaTelegramPlane color='#4285f4' size='20px'/>
              </a>
            </li>
            <li className={s.linkItem}>
              <a className={s.link} href="https://www.codewars.com/users/Daria0109" target='_blank'>
                <SiCodewars color='#4285f4' size='20px'/>
              </a>
            </li>
          </ul>
        </div>

        <div className={s.mapBox} data-aos="fade-in">
          <MapContainer/>
        </div>
      </div>
    </div>
})
export default Contacts;