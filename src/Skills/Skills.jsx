import React from 'react';
import s from './Skills.module.scss';
import Skill from "./Skill/Skill";
import {skills} from './skills-state';
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";


const Skills = React.memo(() => {
  const skillsElements = skills.map(skill =>
    <Skill key={skill.title} title={skill.title} icon={skill.icon} description={skill.description}/>)
  return <Fade>
    <div className={s.skillsBlock} id='Skills'>
      <Zoom>
        <h2 className={s.title}>My <span>Skills</span></h2>
      </Zoom>
      <div className={s.skills}>
        {skillsElements}
      </div>
    </div>
  </Fade>
})

export default Skills;