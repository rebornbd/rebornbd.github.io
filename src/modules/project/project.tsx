import React from 'react'

import ProjectCard from "./components/projectCard";
import { PageTitle } from "../shared/common/pageTitle";
import { PROJECTS } from '../../data/project/project';
import styles from "./project.module.css";


const Project = () => {
  const projects = PROJECTS;
  
  return (
    <div className={styles.container}>
      <PageTitle title="Featured Projects" />
      <div className={styles.proContent}>
        {projects && projects.map((pro, index) => (
          <ProjectCard
            name={pro.name}
            desc={pro.desc}
            picSrc={pro.picSrc}
            gitLink={pro.gitLink}
            hostLink={pro.hostLink}
            stacks={pro.stacks}
            key={`${pro.name}-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Project;
