import React from 'react';
import s from './Project.module.scss'
import projectImg from './../../common/assets/project.png'

function Project(props) {
  return (
    <div className={s.project}>
      <div className={s.imageBox}>
        <img className={s.image} src={projectImg} alt="Project"/>
      </div>
      <div className={s.details}>
        <a className={s.link} href="">View project</a>
        <h4 className={s.title}>{props.title}</h4>
        <p className={s.text}>{props.text}</p>
        <a className={s.codeLink} href="#">Open source code</a>
      </div>
    </div>
  )
}

export default Project;