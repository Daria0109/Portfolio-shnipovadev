import React from 'react';
import s from './Skills.module.scss';
import Skill from "./Skill/Skill";
import {skills} from './skills-state';

const Skills = React.memo(() => {
  const skillsElements = skills.map(skill =>
    <Skill key={skill.title} title={skill.title} icon={skill.icon} description={skill.description}/>)
  return (
    <div className={s.skillsBlock} id='Skills'>
      <h2 className={s.title} data-aos="fade-in">My <span>Skills</span></h2>
      <div className={s.skills}>
        {skillsElements}
      </div>
    </div>
  )
})

export default Skills;