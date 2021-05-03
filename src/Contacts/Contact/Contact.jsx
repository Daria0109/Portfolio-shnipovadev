import React from "react";
import s from './Contact.module.scss'


const Contact = React.memo(({icon, name, info}) => {
  return (
    <div className={s.contact} data-aos="zoom-in" data-aos-offset="400" data-aos-once="true">
      <div className={s.iconBox}>{icon}</div>
      <h4 className={s.contactName}>{name}</h4>
      <p className={s.contactInfo}>{info}</p>
    </div>
  )
})
export default Contact;
