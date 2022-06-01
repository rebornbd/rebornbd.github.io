import {
  Heading,
  Image
} from "../../../components";
import {
  Tags,
  ProjectLink
} from "./";
import { projectProps } from "../../../data/project";
import styles from "./ProjectItem.module.css";


interface projectItemProps {
  index: number;
  project: projectProps;
}

export const ProjectItem = ({ project, index }: projectItemProps) => {
  const onClickHandler = () => {
    const url = (project.website)
      ? project.website
      : (project.github)
        ? project.github
        : null;
    
    if (url) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  }

  return (
    <div className={
      (index % 2 === 0)
        ? `${styles.projectContainer}`
        : `${styles.projectContainer} ${styles.orientationReverse}`
    }>
      <div
        onClick={onClickHandler}
        className={styles.projectImageContent}>
        <Image
          src={project.image}
          alt={project.title}
          flex={1}
          minWidth={180}
          borderRadius={4}
          objectFit="cover"
          isShowHoverEffect={true}
        />
      </div>

      <div className={styles.projectInfoContent}>
        <Heading
          title={project.title}
          fontSize={18}
          mb={10}
        />
        <Heading
          title={project.description}
          color="#ffffff"
          fontSize={14}
          fontWeight={400}
          mb={10}
          isUpperCase={false}
        />
        <Tags tags={project.tags} />
        <ProjectLink project={project} />
      </div>
    </div>
  )
}
