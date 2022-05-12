import { Tooltip } from 'antd';
import moment from 'moment';
import {
  MdLocationOn as LocationIcon
} from "react-icons/md";
import { IconType } from "react-icons/lib";
import React, { useEffect } from 'react'
import styles from "./workEducationCommon.module.css";


export const Heading = ({ Icon, header }: { Icon: IconType, header: string }) => {
  return (
    <div className={styles.heading}>
      <Icon className={styles.icon} />
      <div className={styles.label}>{header}</div>
    </div>
  )
}

export const ExperienceLine = () => {
  return (
    <div className={styles.experienceLine} />
  )
}

export const DataCircle = ({ timeDuration }: { timeDuration: string }) => {
  return (
    <>
      <Tooltip title={timeDuration} color={"#2C394B"} placement="right">
        <div className={styles.dataCircle} />
      </Tooltip>
    </>
  )
}

export const Logo = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <div className={styles.logo}>
      <img src={src} height="40px" width="100px" alt={alt} />
    </div>
  )
}

export const Name = ({ name }: { name: string }) => {
  return (
    <div className={styles.organizationNameTimeDurationContent}>
      <div className={styles.organizationName}>{name}</div>
    </div>
  )
}

export const TimeDuration = ({ timeDuration }: { timeDuration: string }) => {
  return (
    <div className={styles.organizationNameTimeDurationContent}>
      <div className={styles.timeDuration} style={{ marginLeft: '0px' }}>{timeDuration}</div>
    </div>
  )
}

export const NameTimeDuration = ({ name, timeDuration }: { name: string, timeDuration: string }) => {
  return (
    <div className={styles.organizationNameTimeDurationContent}>
      <div className={styles.organizationName}>{name}</div>
      <div className={styles.timeDuration}>{timeDuration}</div>
    </div>
  )
}

export const DesinationEmploymentType = ({ desination, employmentType }: { desination: string, employmentType: string }) => {
  return (
    <div className={styles.desination}>
      {`${desination}, ${employmentType}`}
    </div>
  )
}

export const Location = ({ location }: { location: string }) => {
  return (
    <div className={styles.locationContent}>
      <LocationIcon className={styles.locationIcon} />
      <div className={styles.location}>{location}</div>
    </div>
  )
}
