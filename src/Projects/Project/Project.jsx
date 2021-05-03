import React from 'react';
import s from './Project.module.scss'

const Project = React.memo(({title, description, image, demoLink, sourceCodeLink}) => {
  return (
    <div data-aos="zoom-in" data-aos-offset="400" data-aos-once="true" className={s.project}>
      <div className={s.imageBox}>
        <img className={s.image} src={image} alt="Project"/>
      </div>
      <div className={s.details}>
        <a className={s.link} href={demoLink} target='_blank' rel="noreferrer">View project</a>
        <h4 className={s.title}>{title}</h4>
        <p className={s.text}>{description}</p>
        <a className={s.codeLink} href={sourceCodeLink} target='_blank' rel="noreferrer">Open source code</a>
      </div>
    </div>
  )
})

export default Project;