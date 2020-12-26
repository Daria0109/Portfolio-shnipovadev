import React from 'react';
import s from './Skill.module.scss'

function Skill(props) {
  return (
    <div className={s.skill}>
        {props.icon}
        <h3 className={s.title}>{props.title}</h3>
        <p className={s.info}>{props.description}</p>
    </div>
  )
}

export default Skill;