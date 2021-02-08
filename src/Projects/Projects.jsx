import React from 'react';
import s from './Projects.module.scss';
import Project from "./Project/Project";
import {projects} from './projects-state'
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";


const Projects = React.memo(() => {
  const projectElements = projects.map(proj =>
    <Project key={proj.title}
             title={proj.title}
             description={proj.description}
             image={proj.projectImg}
             demoLink={proj.demoLink} sourceCodeLink={proj.sourceCodeLink}/>)

  return <Fade>
    <div className={s.projectsBlock} id='Portfolio'>
      <Zoom>
        <h2 className={s.title}>My <span>Projects</span></h2>
      </Zoom>
      <div className={s.projects}>
        {projectElements}
      </div>
    </div>
  </Fade>
})

export default Projects;