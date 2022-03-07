import { AiOutlineGithub as GithubIcon } from "react-icons/ai";
import { BiLinkExternal as HostIcon } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import React from "react";

import { proType } from "../../../data/project/project";
import styles from "./projectCard.module.css";


const ProjectCard: React.FC<proType> = ({
  name,
  desc,
  picSrc,
  gitLink,
  hostLink,
  stacks
}: proType): JSX.Element => {
  const history = useHistory();


  const ProLinkIcon = ({ link, isGitLink=false }: {link: (string | undefined), isGitLink?: boolean}) => {
    return (!link)
    ? <></>
    : <>
      <a
        href={link}
        target="_blank" 
        rel="noopener noreferrer">
        {isGitLink
          ? <GithubIcon className={styles.proLinkIcon} />
          : <HostIcon className={styles.proLinkIcon} />
        }
      </a>
    </>
  }

  const proCardClickHandler = () => {
    const proUrl = encodeURIComponent(name.replaceAll(' ', '-').toLowerCase());
    // history.push(`/project/${proUrl}`);
  };


  return (
    <div
      onClick={proCardClickHandler}
      className={styles.container}>
      <img 
        src={picSrc}
        alt={name} 
        className={styles.proImage} />
      
      <div className={styles.innerContent}>
        <div className={styles.proName_Links}>
          <span className={styles.proName}>
            {name}
          </span>
          <div className={styles.proLinks}>
            <span className={styles.proLink}>
              <ProLinkIcon
                link={gitLink}
                isGitLink={true}
               />
            </span>
            <span className={styles.proLink}>
              <ProLinkIcon link={hostLink} />
            </span>
          </div>
        </div>

        <div className={styles.proStacks}>
          {stacks && stacks.map((stack, index) => (
            <span className={styles.proStack} key={index}>
              {stack}
            </span>
          ))}
        </div>

        <div className={styles.proInnerDesc}>
          <span className={styles.proDesc}>
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
