import React from 'react';
import s from './Footer.module.css';
import styleContainer from '../common/styles/containerStyles.module.css';

function Footer(props) {
  return (
    <div className={s.footerBlock}>
      <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <h4 className={s.title}>Daria Shnipova</h4>
        <div className={s.links}>
          <div className={s.link}></div>
          <div className={s.link}></div>
          <div className={s.link}></div>
          <div className={s.link}></div>
          <div className={s.link}></div>
        </div>
        <span className={s.copyrights}>© 2020. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer;