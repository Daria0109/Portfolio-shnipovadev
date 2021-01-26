import React, {useEffect} from "react";
import {FaRegCopyright} from "react-icons/all";
import s from './Footer.module.scss'
import AOS from "aos";

const Footer = React.memo(() => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      delay: 100,
      once: false,
    });
    AOS.refresh()
  }, [])

  return <div className={s.footer} data-aos="fade-in">
    <div className={s.copy}>
      <FaRegCopyright/>
      <span>2021. Daria Shnipova</span>
      </div>
    <p>All rights reserved.</p>
  </div>
})
export default Footer;