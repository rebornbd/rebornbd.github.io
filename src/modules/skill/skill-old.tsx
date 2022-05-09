import {
  SiNodedotjs as NodejsIcon,
  SiExpress as ExpressjsIcon,
  SiNextdotjs as NextjsIcon,
  // SiDjango as DjangoIcon,

  SiReact as ReactIcon,
  SiTypescript as TypescriptIcon,
} from "react-icons/si";
import {
  DiJavascript1 as JavascriptIcon,
  DiHtml5 as HtmlIcon,
  DiCss3 as CssIcon,

  DiDjango as DjangoIcon,
  DiPython as PythonIcon,
} from "react-icons/di";
import React from "react";

import { PageTitle } from "../shared/common/pageTitle";
import styles from "./skill.module.css";
import { IconType } from "react-icons/lib";


type skilProps = {
  label: string;
  icon: IconType;
};
type skillsProps = Array<skilProps | [skilProps, skilProps]>;

const SkillOLD = () => {
  const backend: skillsProps = [
    [{ label: "Node JS", icon: NodejsIcon }, { label: "Express JS", icon: ExpressjsIcon }],
    [{ label: "Python", icon: PythonIcon }, { label: "Django", icon: DjangoIcon }],
    { label: "Python", icon: PythonIcon },
    // { label: "Django", icon: DjangoIcon },
    // { label: "Node JS", icon: NodejsIcon },
    // { label: "Express JS", icon: ExpressjsIcon },
  ];

  const frontend: skillsProps = [
    { label: "React", icon: ReactIcon },
    { label: "Next js", icon: NextjsIcon },
    { label: "Javascript", icon: JavascriptIcon },
    { label: "Typescript", icon: TypescriptIcon },
    { label: "HTML5", icon: HtmlIcon },
    { label: "CSS3", icon: CssIcon },
  ];

  const language: skillsProps = [
    { label: "Python", icon: PythonIcon },
    { label: "Javascript", icon: JavascriptIcon },
    { label: "HTML5", icon: HtmlIcon },
    { label: "CSS3", icon: CssIcon },
    { label: "HTML5", icon: HtmlIcon },
  ];

  const SingleSkillWithoutDiv = ({ skill }: { skill: skilProps }) => {
    return (
      <>
        {<skill.icon title={skill.label} />}
      </>
    )
  }

  const SingleSkill = ({ skill }: { skill: skilProps }) => {
    return (
      <div className={styles.skill}>
        {<skill.icon title={skill.label} />}
      </div>
    )
  }

  const CombineSkill = ({ parent, child }: { parent: skilProps, child: skilProps }) => {
    return (
      <div className={styles.skill}>
        <SingleSkillWithoutDiv skill={parent} />
        <SingleSkillWithoutDiv skill={child} />
      </div>
    )
  }


  const SkillPlate = ({ skills }: { skills: skillsProps }) => {
    return (
      <div className={styles.contentSkillPlate}>
        {skills.map((skill, index) => {
          return (Array.isArray(skill))
            ? <CombineSkill parent={skill[0]} child={skill[1]} key={index} />
            : <SingleSkill skill={skill} key={index} />
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <PageTitle title="My Skills" />

      <SkillPlate skills={backend} />
      <SkillPlate skills={frontend} />
      <SkillPlate skills={language} />
    </div>
  );
};

export default SkillOLD;
