import s from "./Greeting.module.scss";
import photo from "../../assets/avatar.jpg";
import uploadedFileLink from "../../files/CV_Darya Shnipova_Frontend Developer.pdf";
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
    <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className={s.textRight}>
      <span className={s.hello}>Hello</span>
      <h1 className={s.name}>I'm <span>Daria Shnipova</span></h1>
      <h4 className={s.positionTitle}>Frontend Developer</h4>
      <p className={s.info}>
        Welcome to my portfolio site.<br/>
        I'm a result oriented, enthusiastic and stress-resistant  Frontend developer with experience in
        creating landing pages and SPA with the usage of React, Redux, JavaScript, CSS3, HTML5.<br/>
        I'm also a positive and sociable person who easily finds a common language with people and has a
        great desire to improve myself as a developer and learn new technologies.
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