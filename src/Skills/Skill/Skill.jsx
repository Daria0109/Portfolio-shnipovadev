import React from 'react';
import s from './Skill.module.scss'

const Skill = React.memo(({title, icon, description}) => {
  return (
    <div className={s.skill}>
        {icon}
        <h3 className={s.title}>{title}</h3>
        <p className={s.info}>{description}</p>
    </div>
  )
})

export default Skill;