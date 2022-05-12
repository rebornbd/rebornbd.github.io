import moment from 'moment';
import React, { useEffect } from 'react'

import { ABOUT } from '../../data/about/about';
import { AboutMe } from "./components/aboutMe";
import { WorkEducation } from "./components/workEducation";
import { PageTitle } from "../shared/common/pageTitle";
import styles from "./about.module.css";


const About = () => {
  return (
    <div className={styles.container}>
      <PageTitle title='About me' />

      <AboutMe aboutMe={ABOUT.aboutMe} />
      <WorkEducation
        works={ABOUT.work}
        educations={ABOUT.education}
      />
    </div>
  )
}

export default About;
