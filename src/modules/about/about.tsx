import moment from 'moment';
import React, { useEffect } from 'react'

import {
  organizationItemProps,
  workItemProps,
  educationItemProps,
  workItemsProps,
  educationItemsProps,
  workProps,
  educationProps,
  aboutItemsProps,

  ABOUT
} from '../../data/about/about';
import styles from "./about.module.css";


const About = () => {
  const getExperience = (startDate: string, endDate: string) => {
    const validEndDate = (endDate === "Present")
      ? moment(new Date())
      : endDate;

    const mStartDate = moment(startDate);
    const mEndDate = moment(validEndDate);

    const startMonth = (mStartDate.year()*12) + mStartDate.month();
    const endMonth = (mEndDate.year()*12) + mEndDate.month();
    const monthInterval = (endMonth - startMonth + 1);

    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;
    const experience = {
      year: yearsOfExperience,
      month: monthsOfExperience
    }
    
    return experience;
  }

  const WorkExperience = ({ works }: { works: workProps }) => {
    return (
      <div className={styles.worksContent}>
        <works.icon />
        {works.label}
      </div>
    )
  }

  const EducationExperience = ({ educations }: { educations: educationProps }) => {
    return (
      <div className={styles.educationsContent}>
        <educations.icon />
        {educations.label}
      </div>
    )
  }

  const WorkEducation = ({ works, educations }: { works: workProps, educations: educationProps }) => {
    return (
      <div className={styles.experienceContent}>
        <WorkExperience
          works={works} 
        />

        <EducationExperience
          educations={educations}
        />
      </div>
    )
  }


  return (
    <div className={styles.container}>

      <div className={styles.experienceContainer}>
        <WorkEducation
          works={ABOUT.work}
          educations={ABOUT.education}
        />
      </div>
    </div>
  )
}

export default About;
