import React from "react";

import {
  Heading,
  Image
} from "../../components";
import {
  ContactFormIcon
} from "../../components/icons";
import {
  projectProps,
  PROJECT as PROJECTS
} from "../../data/project";
import styles from "./Project.module.css";


const Project = () => {
  const Item = ({ project, index }: { project: projectProps, index: number }) => {
    return (
      <div className={
        (index%2 === 0)
          ? `${styles.projectItem}`
          : `${styles.projectItem} ${styles.orientationReverse}`
      }>
        <img
          src={project.image}
          alt={project.title}
          height={300}
          width="100%"
          className={styles.itemImg}
        />

        <div className={styles.itemDataContent}>
          <div>{project.title}</div>
          <div>{project.description}</div>
          <div>{project.github}</div>
          <div>{project.website}</div>
        </div>
      </div>
    )
  }

  const Projects = () => {
    return (
      <div className={styles.contentProject}>
        {PROJECTS && PROJECTS.map((project, index) => (
          <Item
            project={project} 
            index={index}
            key={project.title}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Heading icon={ContactFormIcon} title="Projects" mb={10} />
      <Projects />
    </div>
  )
}

export default Project;
