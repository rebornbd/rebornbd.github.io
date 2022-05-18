import {
  LocationIcon
} from "../../../components/icons";
import styles from "./Common.module.css";


export const ItemLine = ({ color="#000000" }: { color?: string }) => {
  const styles = {
    borderLeft: `2px solid ${color}`
  };

  return (
    <div style={styles} />
  )
}

export const ItemLogo = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <div className={styles.itemLogo}>
      <img src={src} height="40px" width="100px" alt={alt} />
    </div>
  )
}

export const ItemTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.titlePeriodContent}>
      <div className={styles.itemTitle}>{title}</div>
    </div>
  )
}

export const ItemPeriod = ({ period }: { period: string }) => {
  return (
    <div className={styles.titlePeriodContent}>
      <div className={styles.itemPeriod} style={{ marginLeft: '0px' }}>{`(${period})`}</div>
    </div>
  )
}

export const TitlePeriod = ({ title, period }: { title: string, period: string }) => {
  return (
    <div className={styles.titlePeriodContent}>
      <div className={styles.itemTitle}>{title}</div>
      <div className={styles.itemPeriod}>{`(${period})`}</div>
    </div>
  )
}

export const Desination = ({ desination }: { desination: string }) => {
  return (
    <div className={styles.itemDesination}>
      {desination}
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

export const Specializations = ({ specializations }: { specializations: Array<string> }) => {
  return (
    <div className={styles.specializationsContent}>
      <span className={styles.specializationLabel}>Specialized in:&nbsp;</span>
      {specializations && specializations.map((specialization, index) => {
        return (index+1 !== specialization.length)
          ? <span
              key={index}
              className={styles.specializationItem}
              >{`${specialization},`}&nbsp;</span>
          
          : <span
              key={index}
              className={styles.specializationItem}
              >{specialization}</span>
      })}
    </div>
  )
}
