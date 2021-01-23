import React from "react";
import {FaRegCopyright} from "react-icons/all";
import s from './Footer.module.scss'

const Footer = React.memo(() => {
  return <div className={s.footer} data-aos="fade-in">
    <div className={s.copy}>
      <FaRegCopyright/>
      <span>2021. Daria Shnipova</span>
      </div>
    <p>All rights reserved.</p>
  </div>
})
export default Footer;