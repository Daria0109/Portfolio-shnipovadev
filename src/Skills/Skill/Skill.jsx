import React from 'react';
import s from './Skill.module.scss'


const Skill = React.memo(({title, icon, description}) => {
  return (
      <div className={s.skill}>
        <div className={s.inner}>{icon}
        <h3 className={s.title}>{title}</h3>
        </div>
      </div>
  )
})

export default Skill;