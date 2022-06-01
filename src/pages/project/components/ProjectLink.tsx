import {
  OutlineLinkIcon,
  GithubIcon
} from "../../../components/Icons";
import {
  Heading,
  Link
} from "../../../components";
import {
  projectProps
} from "../../../data/project";
import styles from "./ProjectLink.module.css";


export const ProjectLink = ({ project }: { project: projectProps }) => {
  return (
    <div className={styles.projectLinkContainer}>
      {project.website && 
        <Link
          url={project.website}
          Icon={OutlineLinkIcon}
          fontSize={30}
        />}
      
      {project.github &&
        <Link
          url={project.github}
          Icon={GithubIcon}
          fontSize={30}
        />}
    </div>
  )
}
