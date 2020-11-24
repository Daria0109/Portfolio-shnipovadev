import React from 'react';
import s from './Project.module.css'

function Project(props) {
  return (
    <div className={s.project}>
      <div className={s.image}>
        <a className={s.link} href="">Open</a>
      </div>
      <div className={s.text}>
        <h4 className={s.title}>{props.title}</h4>
        <span className={s.description}>{props.description}</span>
      </div>
    </div>
  )
}

export default Project;