import WahabIcon from "../images/work/wahab.svg";
import AqchowdhuryIcon from "../images/work/aqchowdhury.svg";
import KLoudIcon from "../images/work/kLoud.svg";
import BiziitechIcon from "../images/work/biziitech.svg";


export interface workProps {
  icon: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  specializations: Array<string>;
}

export const WORK: Array<workProps> = [
  {
    icon: AqchowdhuryIcon,
    title: "AQ Chowdhury Ltd.",
    subtitle: "Full-Stack Developer, Part-time",
    period: "Jan 2022 - Present",
    location: "Dhaka, Bangladesh",
    specializations: [
      "Node JS",
      "Express JS",
      "React",
      "Next JS",
      "Flutter",
      "Javascript",
      "Typescript",
      "MongoDB",
      "Figma"
    ]
  },
  {
    icon: KLoudIcon,
    title: "KLoud Technologies Limited",
    subtitle: "DevOps Engineer, Full-time",
    period: "Dec 2019 - Present",
    location: "Dhaka, Bangladesh",
    specializations: [
      "Docker",
      "Nginx",
      "Elasticsearch",
      "Python",
      "Django",
      "React",
      "Redis",
      "Celery"
    ]
  },
  {
    icon: BiziitechIcon,
    title: "Biziitech",
    subtitle: "Full-Stack Developer, Intern",
    period: "Jun 2019 - Nov 2019",
    location: "Dhaka, Bangladesh",
    specializations: [
      "Java",
      "Springboot",
      "React",
      "Javascript",
      "MySQL"
    ]
  }
];
