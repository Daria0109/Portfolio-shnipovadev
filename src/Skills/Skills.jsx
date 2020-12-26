import React from 'react';
import s from './Skills.module.scss';
import Skill from "./Skill/Skill";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiTypescript} from "react-icons/all";

function Skills() {
  return (
    <div className={s.skillsBlock}>
        <h2 className={s.title}>My <span>Skills</span></h2>
        <div className={s.skills}>
          <Skill title='HTML5' icon={<SiHtml5 color={'#dd512a'} size={'70px'}/>} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Skill title='CSS3' icon={<SiCss3 color={'#2196f3'} size={'70px'}/>}   description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Skill title='JavaScript' icon={<SiJavascript color={'#e4ba42'} size={'70px'}/>} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Skill title='TypeScript' icon={<SiTypescript color={'#2f74c0'} size={'70px'}/>} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Skill title='React' icon={<SiReact color={'#02d9fc'} size={'70px'}/>} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Skill title='Redux' icon={<SiRedux color={'#764abc'} size={'70px'}/>} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
        </div>
    </div>
  )
}

export default Skills;