import React from 'react';
import s from './Project.module.scss'

const Project = React.memo(({title, description, image}) => {
  return (
    <div className={s.project}>
      <div className={s.imageBox}>
        <img className={s.image} src={image} alt="Project"/>
      </div>
      <div className={s.details}>
        <a className={s.link} href="#">View project</a>
        <h4 className={s.title}>{title}</h4>
        <p className={s.text}>{description}</p>
        <a className={s.codeLink} href="#">Open source code</a>
      </div>
    </div>
  )
})

export default Project;