import {
  MdWork as WorkIcon
} from "react-icons/md";
import {
  FaGraduationCap as GraduationCapIcon
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

import AWahabAndCoLogo from "./icons/aWahabAndCo.svg";
import KLoudLtdLogo from "./icons/kLoudLtd.svg";
import BiziitechLogo from "./icons/biziitech.svg";
import BsmrstuLogo from "./icons/bsmrstu.svg";
import SundaliLogo from "./icons/sundali.svg";
import DkhLogo from "./icons/dkh.svg";
import AboutMeLogo from "./icons/aboutMe.svg";


export type organizationItemProps = {
  name: string;
  logo: string;
  location: string;
}

export type timeDurationItemProps = {
  start: string;
  end: string;
}

export type technologiesUsedItemProps = {
  label: string;
  data: Array<string>;
}

export type workItemProps = {
  organization: organizationItemProps;
  timeDuration: timeDurationItemProps;
  employmentType: string;
  desination: string;
  technologiesUsed: technologiesUsedItemProps;
}

export type educationItemProps = {
  organization: organizationItemProps;
  fieldOfStudy: string;
  degree: string;
  timeDuration: timeDurationItemProps;
}

export type workItemsProps = Array<workItemProps>;
export type educationItemsProps = Array<educationItemProps>;
export type aboutMeItemsProps = { icon: string, bio: string; }

export type workProps = {
  label: string;
  icon: IconType;
  data: workItemsProps
}

export type educationProps = {
  label: string;
  icon: IconType;
  data: educationItemsProps
}

export type aboutMeProps = {
  data: aboutMeItemsProps
}

export type aboutItemsProps = {
  aboutMe: aboutMeProps,
  work: workProps,
  education: educationProps
}


const technologiesUsedLabel = "Specialized in";

export const ABOUT: aboutItemsProps = {
  aboutMe: {
    data: {
      icon: AboutMeLogo,
      bio: `
      I'm Amruth Pillai, and as you might have already read, I'm a designer, developer, photographer and a writer. This website was made to showcase all of what I can do and plan to do. Don't judge my writing based on this section though, this is by far my shoddiest work yet.

      I got into design because I consider myself a pseudo-perfectionist, if that's even a word? As in, I hate to see things 'not look good'. So I set out on a journey to make products that people use that 'look great', and I'm forever on that path.
      
      I got into development because computers have always fascinated me. int i = 10; creates an integer of value 10? LIKE, WOW! But seriously, just seeing code getting converted to things we use regularly, like Facebook or Amazon, was no less than magic to me and that's where my quest to invent began.
      `
    }
  },

  work: {
    label: "Work",
    icon: WorkIcon,
    data:  [
      {
        organization: {
          name: "A Wahab & Co.",
          location: "Dhaka, Bangladesh",
          logo: AWahabAndCoLogo
        },
        timeDuration: {
          start: "Feb 2022",
          end: "Present"
        },
        employmentType: "Full-time",
        desination: "Full-Stack Developer",
        technologiesUsed: {
          label: technologiesUsedLabel,
          data: [
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
        }
      },

      {
        organization: {
          name: "KLoud Technologies Limited",
          location: "Dhaka, Bangladesh",
          logo: KLoudLtdLogo
        },
        timeDuration: {
          start: "Dec 2019",
          end: "Jan 2022"
        },
        employmentType: "Full-time",
        desination: "DevOps Engineer",
        technologiesUsed: {
          label: technologiesUsedLabel,
          data: [
            "Docker",
            "Nginx",
            "Elasticsearch",
            "Python",
            "Django",
            "React",
            "Redis",
            "Celery"
          ]
        }
      },

      {
        organization: {
          name: "Biziitech",
          location: "Dhaka, Bangladesh",
          logo: BiziitechLogo
        },
        timeDuration: {
          start: "Jun 2019",
          end: "Nov 2019"
        },
        employmentType: "Intern",
        desination: "Full-Stack Developer",
        technologiesUsed: {
          label: technologiesUsedLabel,
          data: [
            "Java",
            "Springboot",
            "React",
            "Javascript",
            "MySQL"
          ]
        }
      }
    ]
  },

  education: {
    label: "Education",
    icon: GraduationCapIcon,
    data: [
      {
        organization: {
          name: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
          location: "Gopalganj, Dhaka, Bangladesh",
          logo: BsmrstuLogo
        },
        fieldOfStudy: "Computer Science & Engineering",
        degree: "BSc. in Engineering",
        timeDuration: {
          start: "2014",
          end: "2018"
        }
      },
  
      {
        organization: {
          name: "Sundali S. T. School and College",
          location: "Jashore, Dhaka, Bangladesh",
          logo: SundaliLogo
        },
        fieldOfStudy: "Science",
        degree: "HSC",
        timeDuration: {
          start: "2012",
          end: "2013"
        }
      },
  
      {
        organization: {
          name: "D.K.H. High School",
          location: "Jashore, Dhaka, Bangladesh",
          logo: DkhLogo
        },
        fieldOfStudy: "Science",
        degree: "SSC",
        timeDuration: {
          start: "2010",
          end: "2011"
        }
      }
    ]
  }
}
