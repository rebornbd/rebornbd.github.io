import {
  SiNodedotjs as NodejsIcon,
  SiExpress as ExpressjsIcon,
  SiNextdotjs as NextjsIcon,
  SiReact as ReactIcon,
  SiTypescript as TypescriptIcon,
  SiDart as DartIcon,
  SiFlutter as FlutterIcon,

  SiJava as JavaIcon,
  SiSpringboot as SpringbootIcon,

  SiC as CIcon,
  SiCplusplus as CplusplusIcon,


  SiMysql as MySQLIcon,
  SiPostgresql as PostgresqlIcon,
  SiMongodb as MongodbIcon
} from "react-icons/si";
import {
  DiJavascript1 as JavascriptIcon,
  DiHtml5 as HtmlIcon,
  DiCss3 as CssIcon,

  DiDjango as DjangoIcon,
  DiPython as PythonIcon,
} from "react-icons/di";
import { IconType } from "react-icons/lib";


export type skillProps = { label: string; icon: IconType; };
export type skillItemProps = skillProps | [skillProps, skillProps];
export type skillItemsProps = { label: string; data: Array<skillItemProps>};

export type skillObjectProps = {
  backend: skillItemsProps,
  frontend: skillItemsProps,
  language: skillItemsProps,
  database: skillItemsProps,
  crossPlatform: skillItemsProps,
}


export const SKILL: skillObjectProps = {
  backend: {
    label: "Backend",
    data: [
      [{ label: "Node JS", icon: NodejsIcon }, { label: "Express JS", icon: ExpressjsIcon }],
      [{ label: "Python", icon: PythonIcon }, { label: "Django", icon: DjangoIcon }],
      [{ label: "Java", icon: JavaIcon }, { label: "Springboot", icon: SpringbootIcon }]
    ]
  },

  frontend: {
    label: "Frontend",
    data: [
      [{ label: "React", icon: ReactIcon }, { label: "Next js", icon: NextjsIcon }],
      { label: "Javascript", icon: JavascriptIcon },
      { label: "Typescript", icon: TypescriptIcon },
      { label: "HTML5", icon: HtmlIcon },
      { label: "CSS3", icon: CssIcon },
    ]
  },

  crossPlatform: {
    label: "Cross Platform",
    data: [
      [{ label: "Dart", icon: DartIcon }, { label: "Flutter", icon: FlutterIcon }],
    ]
  },

  language: {
    label: "Language",
    data: [
      { label: "Javascript", icon: JavascriptIcon },
      { label: "Typescript", icon: TypescriptIcon },
      { label: "Python", icon: PythonIcon },
      [{ label: "C", icon: CIcon },
      { label: "C++", icon: CplusplusIcon }],
      { label: "Java", icon: JavaIcon },
    ]
  },

  database: {
    label: "Database",
    data: [
      { label: "MySQL", icon: MySQLIcon },
      { label: "PostgreSQL", icon: PostgresqlIcon },
      { label: "MongoDB", icon: MongodbIcon },
    ]
  }
}
