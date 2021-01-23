import React from 'react';
import s from './Projects.module.scss';
import Project from "./Project/Project";
import {projects} from './projects-state'

const Projects = React.memo(() => {
  const projectElements = projects.map(proj =>
    <Project key={proj.title}
             title={proj.title}
             description={proj.description}
             image={proj.projectImg}/>)

  return <div className={s.projectsBlock} id='Portfolio'>
    <h2 className={s.title} data-aos="fade-in">My <span>Projects</span></h2>
    <div className={s.projects}>
      {projectElements}
    </div>
  </div>
})

export default Projects;