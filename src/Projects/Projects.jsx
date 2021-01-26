import React, {useEffect} from 'react';
import s from './Projects.module.scss';
import Project from "./Project/Project";
import {projects} from './projects-state'
import AOS from "aos";

const Projects = React.memo(() => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      delay: 100,
      once: false,
    });
    AOS.refresh()
  }, [])

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