import React, {useEffect} from 'react';
import s from './Skills.module.scss';
import Skill from "./Skill/Skill";
import {skills} from './skills-state';
import AOS from "aos";

const Skills = React.memo(() => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      delay: 100,
      once: false,
    });
    AOS.refresh()
  }, [])

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