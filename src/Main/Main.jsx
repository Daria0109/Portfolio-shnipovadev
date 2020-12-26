import React from 'react';
import s from './Main.module.scss';
import Nav from "../Nav/Nav";
import photo from './../common/assets/avatar.jpg'
import Button from "../common/Button/Button";
import {FaBriefcase, FaDownload} from "react-icons/all";

function Main() {
  return (
    <div className={s.mainBlock}>
      <Nav/>
        <div className={s.greeting}>
          <div className={s.photo}>
            <img src={photo} alt="photo"/>
          </div>
          <div className={s.textRight}>
            <span className={s.hello}>Hello</span>
            <h1 className={s.name}>I'm <span>Daria Shnipova</span></h1>
            <h4 className={s.positionTitle}>Frontend Developer</h4>
            <p className={s.info}>
              With over 5+ years of job experience.
              I studied Information Technology at University and later honed
              my skills through commercial and freelance experience.
              My skills include PHP, Laravel, jQuery, database design,
              JavaScript and MySQL.
            </p>
            <div className={s.buttons}>
              <Button name='Download my CV' icon={<FaDownload color='white' size={'15px'}/>}/>
              <Button name='Portfolio' icon={<FaBriefcase color='white' size={'15px'}/>}/>
            </div>
          </div>
        </div>


      </div>
  )
}

export default Main;