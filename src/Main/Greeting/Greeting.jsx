import s from "./Greeting.module.scss";
import photo from "../../assets/avatar.jpg";
import uploadedFileLink from "../../files/JuniorQA_DariaShnipova.pdf";
import React from "react";
import Button from "../Button/Button";
import {FaBriefcase, FaDownload} from "react-icons/all";
import Tilt from 'react-tilt'
import {Link} from "react-scroll";

const Greeting = React.memo(({handleMenu}) => {
  return <div className={s.greeting}>
    <div className={s.photo}>
      <Tilt className="Tilt" options={{max: 25, scale: 1}}>
        <img src={photo} alt="Daria Shnipova"/>
      </Tilt>
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
        <a className={s.buttonLink} href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
          <Button name='Download my CV' icon={<FaDownload color='white' size={'15px'}/>}/>
        </a>
        <Link className={s.buttonLink}
              to={'Portfolio'}
              spy={true}
              smooth={true}
              duration={500}
        >
          <Button name='Portfolio' icon={<FaBriefcase color='white' size={'15px'}/>}/>
        </Link>
      </div>
    </div>
  </div>
})

export default Greeting;