import { Heading } from "../../../components/Heading";
import { Circle } from "../../../components/Circle";
import { GraduationCapIcon } from "../../../components/Icons";
import {
  ItemLine,
  ItemLogo,
  ItemTitle,
  ItemPeriod,
  Desination,
  Location
} from "./Common";
import {
  educationProps,
  EDUCATION as EDUCATIONS
} from "../../../data/education";
import styles from "./WorkEducation.module.css";


export const Education = () => {
  const Item = ({ item }: { item: educationProps }) => {
    return (
      <div className={styles.contentItem}>
        <Circle timePeriod={item.period} radius={15} />

        <div className={styles.contentItemData}>
          <ItemLogo
            src={item.icon}
            alt={item.title}
          />
          <ItemTitle
            title={item.title}
          />
          <Desination
            desination={item.subtitle}
          />
          <Location
            location={item.location}
          />
          <ItemPeriod
            period={item.period}
          />
        </div>
      </div>
    )
  }

  const Content = () => {
    return (
      <div className={styles.content}>
        <ItemLine />
        <div className={styles.contentItems}>
          {EDUCATIONS && EDUCATIONS.map(education => (
            <Item item={education} key={education.title} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Heading icon={GraduationCapIcon} title="Education" mb={20} />
      <Content />
    </div>
  )
}
