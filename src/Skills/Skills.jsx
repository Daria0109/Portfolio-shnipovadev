import React from 'react';
import s from './Skills.module.scss';
import Skill from "./Skill/Skill";
import {skills} from './skills-state';


const Skills = React.memo(() => {
  const skillsFirstRow = skills.slice(0, 3).map(skill =>
    <Skill key={skill.title} title={skill.title} icon={skill.icon}/>)
  const skillsSecondRow = skills.slice(3).map(skill =>
    <Skill key={skill.title} title={skill.title} icon={skill.icon}/>)
  return <div  className={s.skillsBlock} id='Skills'>
        <h2 data-aos="fade-up" data-aos-offset="300" data-aos-once="true" className={s.title}>My <span>Skills</span></h2>
      <div className={s.skills}>
        <div className={s.row}>{skillsFirstRow}</div>
        <div className={s.row}>{skillsSecondRow}</div>
      </div>
    </div>
})

export default Skills;