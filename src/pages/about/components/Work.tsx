import { Heading } from "../../../components/Heading";
import { Circle } from "../../../components/Circle";
import { WorkIcon } from "../../../components/icons";
import {
  ItemLine,
  ItemLogo,
  TitlePeriod,
  Desination,
  Location,
  Specializations
} from "./Common";
import {
  workProps,
  WORK as WORKS
} from "../../../data/work";
import styles from "./WorkEducation.module.css";


export const Work = () => {
  const Item = ({ item }: { item: workProps }) => {
    return (
      <div className={styles.contentItem}>
        <Circle timePeriod={item.period} radius={15} />

        <div className={styles.contentItemData}>
          <ItemLogo
            src={item.icon}
            alt={item.title}
          />
          <TitlePeriod
            title={item.title}
            period={item.period}
          />
          <Desination
            desination={item.subtitle}
          />
          <Location
            location={item.location}
          />
          <Specializations
            specializations={item.specializations}
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
          {WORKS && WORKS.map(work => (
            <Item item={work} key={work.title} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Heading icon={WorkIcon} title="Work" mb={20} />
      <Content />
    </div>
  )
}
