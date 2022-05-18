import React from "react";

import {
  Heading
} from "../../components";
import {
  ToolsIcon
} from "../../components/icons";
import {
  skillItemProps,
  skillItemOrArrayItemProps,
  skillItemsProps,
  SKILL as SKILLS
} from "../../data/skill";
import styles from "./Skill.module.css";


const Skill = () => {
  const SingleIcon = ({ first }: { first: skillItemProps }) => {
    return (
      <>
        <first.icon
          title={first.label}
          className={styles.skillIcons}
        />
      </>
    )
  }

  const DoubleIcon = ({ first, second }: { first: skillItemProps, second: skillItemProps }) => {
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

  const SkillItem = ({ skillItem }: { skillItem: skillItemOrArrayItemProps }) => {
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
        <Heading icon={skills.icon} title={skills.label} fontSize={13} fontWeight={500} />

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
      <Heading icon={ToolsIcon} title="Skills" mb={10} />

      <SkillPlate skills={SKILLS.backend} />
      <SkillPlate skills={SKILLS.frontend} />
      <SkillPlate skills={SKILLS.crossPlatform} />
      <SkillPlate skills={SKILLS.database} />
      <SkillPlate skills={SKILLS.language} />
    </div>
  );
}

export default Skill;
