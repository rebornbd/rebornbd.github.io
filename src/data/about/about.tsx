import {
  MdWork as WorkIcon
} from "react-icons/md";
import {
  FaGraduationCap as GraduationCapIcon
} from "react-icons/fa";
import { IconType } from "react-icons/lib";


export type organizationItemProps = {
  name: string;
  logo: string;
  location: string;
}

export type timeDurationItemProps = {
  start: string;
  end: string;
}

export type workItemProps = {
  organization: organizationItemProps;
  timeDuration: timeDurationItemProps;
  employmentType: string;
  desination: string;
  technologiesUsed: Array<string>;
}

export type educationItemProps = {
  organization: organizationItemProps;
  fieldOfStudy: string;
  degree: string;
  timeDuration: timeDurationItemProps;
}

export type workItemsProps = Array<workItemProps>;
export type educationItemsProps = Array<educationItemProps>;

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

export type aboutItemsProps = {
  work: workProps,
  education: educationProps
}


export const ABOUT: aboutItemsProps = {
  work: {
    label: "Work",
    icon: WorkIcon,
    data:  [
      {
        organization: {
          name: "A Wahab & Co.",
          location: "Dhaka, Bangladesh",
          logo: ""
        },
        timeDuration: {
          start: "Feb 2022",
          end: "Present"
        },
        employmentType: "Full-time",
        desination: "Full-Stack Developer",
        technologiesUsed: [
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
        organization: {
          name: "KLoud Technologies Limited",
          location: "Dhaka, Bangladesh",
          logo: ""
        },
        timeDuration: {
          start: "Dec 2019",
          end: "Jan 2022"
        },
        employmentType: "Full-time",
        desination: "DevOps Engineer",
        technologiesUsed: [
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
        organization: {
          name: "Biziitech",
          location: "Dhaka, Bangladesh",
          logo: ""
        },
        timeDuration: {
          start: "Jun 2019",
          end: "Nov 2019"
        },
        employmentType: "Intern",
        desination: "Full-Stack Developer",
        technologiesUsed: [
          "Java",
          "Springboot",
          "React",
          "Javascript",
          "MySQL"
        ]
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
          logo: ""
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
          logo: ""
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
          logo: ""
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
