import React from "react";
import s from './ContactForm.module.scss'


const ContactForm = () => {
  return <form className={s.form}>
    <div className={`${s.rowForm} ${s.top}`}>
      <input className={`${s.name} ${s.input}`} type="text" name="name" placeholder='Name'/>
      <input className={`${s.email} ${s.input}`} type="text" name="email" placeholder='Email*'/>
    </div>

    <div className={s.rowForm}>
      <input className={`${s.subject} ${s.input}`} type="text" name="subject" placeholder='Subject*'/>
    </div>

    <div className={s.rowForm}>
      <textarea className={s.message} name="message" rows="5" placeholder='Message*'/>
    </div>

    <button className={s.sendButton}>Send Message</button>

  </form>
}
export default ContactForm;