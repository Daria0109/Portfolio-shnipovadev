import React from "react";
import s from './Contact.module.scss'


const Contact = React.memo(({icon, name, info}) => {
  return (
    <div className={s.contact}>
      <div className={s.iconBox}>{icon}</div>
      <h4 className={s.contactName}>{name}</h4>
      <p className={s.contactInfo}>{info}</p>
    </div>
  )
})
export default Contact;
