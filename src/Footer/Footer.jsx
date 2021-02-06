import React from "react";
import {FaRegCopyright} from "react-icons/all";
import s from './Footer.module.scss'


const Footer = React.memo(() => {
  return <footer className={s.footer}>
    <div className={s.copy}>
      <FaRegCopyright/>
      <span>2021. Daria Shnipova</span>
      </div>
    <p>All rights reserved.</p>
  </footer>
})
export default Footer;