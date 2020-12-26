import React from 'react';
import s from './Projects.module.scss';
import Project from "./Project/Project";

function Projects() {
  return (
    <div className={s.projectsBlock}>
        <h2 className={s.title}>My <span>Projects</span></h2>
        <div className={s.projects}>
          <Project title='Project Name' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Project title='Project Name' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Project title='Project Name' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Project title='Project Name' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Project title='Project Name' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
          <Project title='Project Name' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
        </div>
    </div>
  )
}

export default Projects;