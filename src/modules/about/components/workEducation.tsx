import { Tooltip } from 'antd';
import moment from 'moment';
import {
  MdLocationOn as LocationIcon
} from "react-icons/md";
import { IconType } from "react-icons/lib";
import React, { useEffect } from 'react'

import {
  organizationItemProps,
  technologiesUsedItemProps,
  workItemProps,
  educationItemProps,
  workItemsProps,
  educationItemsProps,
  workProps,
  educationProps,
  aboutItemsProps,
} from '../../../data/about/about';
import {
  Heading,
  ExperienceLine,
  DataCircle,
  Logo,
  Name,
  TimeDuration,
  NameTimeDuration,
  DesinationEmploymentType,
  Location
} from "./workEducationCommon";
import { PageTitle } from "../../shared/common/pageTitle";
import styles from "./workEducation.module.css";


export const WorkEducation = ({ works, educations }: { works: workProps, educations: educationProps }) => {
  const TechnologiesUsed = ({ technologiesUsed }: {  technologiesUsed: technologiesUsedItemProps}) => {
    return (
      <div className={styles.technologiesUsedContent}>
        <span className={styles.technologiesUsedLabel}>{technologiesUsed.label}:&nbsp;</span>
        {technologiesUsed.data && technologiesUsed.data.map((tech, index) => {
          return (index+1 !== technologiesUsed.data.length)
            ? <span key={index} className={styles.technologiesUsedData}>{`${tech},`}&nbsp;</span>
            : <span key={index} className={styles.technologiesUsedData}>{tech}</span>
        })}
      </div>
    )
  }

  const Work = ({ work }: { work: workItemProps }) => {
    const timeDuration = `(${work.timeDuration.start} - ${work.timeDuration.end})`;
    
    return (
      <div className={styles.dataContent}>
        <DataCircle timeDuration={timeDuration} />
        
        <div className={styles.dataInnerContent}>
          <Logo
            src={work.organization.logo}
            alt={`${work.organization.name} logo`}
          />

          <NameTimeDuration
            name={work.organization.name} 
            timeDuration={timeDuration}
          />

          <DesinationEmploymentType
            desination={work.desination}
            employmentType={work.employmentType}
          />

          <Location
            location={work.organization.location}
          />

          <TechnologiesUsed 
            technologiesUsed={work.technologiesUsed}
          />
        </div>
      </div>
    )
  }

  const Education = ({ education }: { education: educationItemProps }) => {
    const timeDuration = `(${education.timeDuration.start} - ${education.timeDuration.end})`;
    
    return (
      <div className={styles.dataContent}>
        <DataCircle timeDuration={timeDuration} />

        <div className={styles.dataInnerContent}>
          <Logo
            src={education.organization.logo}
            alt={`${education.organization.name} logo`}
          />

          <Name
            name={education.organization.name}
          />

          <DesinationEmploymentType
            desination={education.degree}
            employmentType={education.fieldOfStudy}
          />

          <Location
            location={education.organization.location}
          />

          <TimeDuration timeDuration={timeDuration} />
        </div>
      </div>
    )
  }

  const WorkExperienceData = ({ works }: { works: workItemsProps }) => {
    return (
      <div className={styles.experienceData}>
        {works && works.map((work, index) => (
          <Work work={work} key={index} />
        ))}
      </div>
    )
  }

  const EducationExperienceData = ({ educations }: { educations: educationItemsProps }) => {
    return (
      <div className={styles.experienceData}>
        {educations && educations.map((education, index) => (
          <Education education={education} key={index} />
        ))}
      </div>
    )
  }

  const WorkExperience = ({ works }: { works: workProps }) => {
    return (
      <div className={styles.worksContent}>
        <Heading Icon={works.icon} header={works.label} />
        
        <div className={styles.experienceBody}>
          <ExperienceLine />
          <WorkExperienceData works={works.data} />
        </div>
      </div>
    )
  }

  const EducationExperience = ({ educations }: { educations: educationProps }) => {
    return (
      <div className={styles.educationsContent}>
        <Heading Icon={educations.icon} header={educations.label} />
        
        <div className={styles.experienceBody}>
          <ExperienceLine />
          <EducationExperienceData educations={educations.data} />
        </div>
      </div>
    )
  }

  
  return (
    <>
      <PageTitle title='Experience & study' marginTop={30} />
      <div className={styles.workEducationContainer}>
        <div className={styles.workEducationContent}>
          <WorkExperience
            works={works} 
          />

          <EducationExperience
            educations={educations}
          />
        </div>
      </div>
    </>
  )
}
