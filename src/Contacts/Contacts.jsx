import s from "./Contacts.module.scss";
import Contact from "./Contact/Contact";
import {FaEnvelope, FaGithub, FaLinkedinIn, FaPhone, FaRocket, FaTelegramPlane} from "react-icons/all";
import React from "react";
import ContactForm from "./Contact/ContactForm";

const Contacts = () => {
  return <div className={s.contactsBlock}>
    <h2 className={s.title}>Contact <span>me</span></h2>
    <div className={s.contacts}>
      <Contact icon={<FaRocket color='#4285f4' size='25px'/>} name='My location:'
               info='Minsk city, Republic of Belarus'/>
      <Contact icon={<FaPhone color='#4285f4' size='25px'/>} name='Phone number:' info='+375 29 513 92 66'/>
      <Contact icon={<FaEnvelope color='#4285f4' size='25px'/>} name='Email Address:' info='emailemail@gmail.com'/>

      <div className={s.formBox}>
        <ContactForm/>
        <ul className={s.socialLinks}>
          <li className={s.linkItem}>
            <a className={s.link} href="#">
              <FaGithub color='#4285f4' size='20px'/>
            </a>
          </li>
          <li className={s.linkItem}>
            <a className={s.link} href="#">
              <FaLinkedinIn color='#4285f4' size='20px'/>
            </a>
          </li>
          <li className={s.linkItem}>
            <a className={s.link} href="#">
              <FaTelegramPlane color='#4285f4' size='20px'/>
            </a>
          </li>
        </ul>
      </div>
      <div className={s.mapBox}></div>
    </div>
  </div>
}
export default Contacts;