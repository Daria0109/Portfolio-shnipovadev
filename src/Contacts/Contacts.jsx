import React from 'react';
import s from './Contacts.module.css';
import styleContainer from '../common/styles/containerStyles.module.css';

function Contacts(props) {
  return (
    <div className={s.contactsBlock}>
      <div className={`${styleContainer.container} ${s.contactsContainer}`}>
        <h2 className={s.title}>Contact</h2>
        <form className={s.form} action="">
          <input className={s.input} type="text" name="name" placeholder='Name...'/>
          <input className={s.input} type="text" name="email" placeholder='Email...'/>
          <textarea className={s.message} name="message" rows="10" placeholder='Your message...'></textarea>
        </form>
        <button className={s.sendButton}>Send Message</button>
      </div>
    </div>
  )
}

export default Contacts;