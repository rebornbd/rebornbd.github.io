import { IconType } from 'react-icons/lib';
import moment from 'moment';
import React from 'react';

import { SOCIALS } from '../data/social';
import styles from "./Footer.module.css";


const Footer = () => {
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
      <div className={styles.footerCopyright}>
        Copyright &copy; {getCurrentYear()}
      </div>
      <div className={styles.footerCopyright}>
        Designed &amp; Developed with ♡ by dipta
      </div>
      <div className={styles.footerSocialsIcon}>
        {SOCIALS && SOCIALS.map((socialsLink, index) => (
          <SocialIcon
            link={socialsLink?.link}
            title={socialsLink?.title}
            Icon={socialsLink?.icon}
            key={index}
          />
        ))}
      </div>
    </footer>
  )
};

export default Footer;
