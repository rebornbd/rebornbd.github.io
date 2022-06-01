import React from "react";

import {
  Heading,
} from "../../components";
import {
  ContactFormIcon,
} from "../../components/Icons";
import {
  ProjectItem
} from "./components/";
import {
  projectProps,
  PROJECTS
} from "../../data/project";
import styles from "./Project.module.css";


const Project = () => {
  return (
    <div className={styles.container}>
      <Heading icon={ContactFormIcon} title="Projects" mb={40} />
      <div className={styles.projectsContainer}>
        {PROJECTS && PROJECTS.map((project, index) => (
          <ProjectItem
            index={index}
            project={project} 
            key={project.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Project;
