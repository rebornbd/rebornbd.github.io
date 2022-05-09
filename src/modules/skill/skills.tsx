import React from "react";

import {
  skillProps,
  skillItemProps,
  skillItemsProps,
  skillObjectProps,

  SKILL
} from "../../data/skill/skill";
import { PageTitle } from "../shared/common/pageTitle";
import styles from "./skill.module.css";


const Skill = () => {
  const SingleIcon = ({ first }: { first: skillProps }) => {
    return (
      <>
        <first.icon
          title={first.label}
          className={styles.skillIcons}
        />
      </>
    )
  }

  const DoubleIcon = ({ first, second }: { first: skillProps, second: skillProps }) => {
    return (
      <>
        <first.icon
          title={first.label}
          className={styles.skillIcons}
        />

        <second.icon
          title={second.label}
          className={styles.skillIcons}
        />
      </>
    )
  }

  const SkillItem = ({ skillItem }: { skillItem: skillItemProps }) => {
    const isDoubleItem = Array.isArray(skillItem);

    const Icon = (isDoubleItem)
      ? <DoubleIcon first={skillItem[0]} second={skillItem[1]} />
      : <SingleIcon first={skillItem} />

    const label = (isDoubleItem)
      ? `${skillItem[0].label} | ${skillItem[1].label}`
      : `${skillItem.label}`;
    
    return (
      <div className={styles.skillItemContent}>
        <div className={styles.SICIcon}>
          {Icon}
        </div>
        <div className={styles.SICLabel}>{label}</div>
      </div>
    )
  }

  const SkillPlate = ({ skills }: { skills: skillItemsProps }) => {
    const skillItems = skills.data;

    return (
      <div className={styles.skillPlateContainer}>
        <PageTitle title={skills.label} fontSize={18} fontWeight={500} />

        <div className={styles.skillPlateContent}>
          {skillItems && skillItems.map((skillItem, index) => (
            <SkillItem
              skillItem={skillItem}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <PageTitle title="My Skills" marginBottom={30} />

      <SkillPlate skills={SKILL.backend} />
      <SkillPlate skills={SKILL.frontend} />
      <SkillPlate skills={SKILL.crossPlatform} />
      <SkillPlate skills={SKILL.database} />
      <SkillPlate skills={SKILL.language} />
    </div>
  );
}

export default Skill;
