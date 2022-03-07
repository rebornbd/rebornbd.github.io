import {
  DiGithubBadge as GithubIcon,
  DiStackoverflow as StackoverflowIcon
} from "react-icons/di";
import {
  FaLinkedin as LinkedinIcon,
  FaDiscord as DiscordIcon
} from "react-icons/fa";
import moment from 'moment';
import { IconType } from 'react-icons/lib';
import React from 'react';
import styles from "./footer.module.css";


const Footer: React.FC = () => {
  const socialsLinks = [
    {
      title: "Github",
      icon: GithubIcon,
      link: "https://github.com/rebornbd"
    },
    {
      title: "Linkedin",
      icon: LinkedinIcon,
      link: "https://www.linkedin.com/in/diptadhar/"
    },
    {
      title: "Stackoverflow",
      icon: StackoverflowIcon,
      link: "https://stackoverflow.com/users/13161183/reborn"
    },
    {
      title: "Discord",
      icon: DiscordIcon,
      link: "https://discord.com/users/901771209929289798"
    } 
  ];

  const SocialIcon = ({ link, title="", Icon }: { link: string, title?: string, Icon: IconType }) => {
    return (
      <a
        className={styles.socialIconTag}
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        <Icon
          title={title}
          className={styles.socialIcon}
        />
      </a>
    )
  };

  const getCurrentYear = () => {
    return moment().format('YYYY');
  };
  

  return (
    <footer className={styles.container}>
      <div className={styles.footerCopyright}>Copyright &copy; {getCurrentYear()}</div>
      <div className={styles.footerSocialsIcon}>
        {socialsLinks && socialsLinks.map(socialsLink => (
          <SocialIcon
            link={socialsLink?.link}
            title={socialsLink?.title}
            Icon={socialsLink?.icon}
          />
        ))}
      </div>
    </footer>
  )
};

export default Footer;
