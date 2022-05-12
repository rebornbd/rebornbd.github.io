import { IconType } from "react-icons/lib";

import {
  NodejsIcon,
  ExpressjsIcon,
  NextjsIcon,
  ReactIcon,
  TypescriptIcon,
  DartIcon,
  FlutterIcon,
  JavaIcon,
  SpringbootIcon,
  CIcon,
  CplusplusIcon,
  MySQLIcon,
  PostgresqlIcon,
  MongodbIcon,
  JavascriptIcon,
  HtmlIcon,
  CssIcon,
  DjangoIcon,
  PythonIcon,
} from "../components/icons";


export type skillItemProps = {
  label: string;
  icon: IconType;
}

export type skillItemOrArrayItemProps = 
  skillItemProps |
  [skillItemProps, skillItemProps]

export type skillItemsProps = {
  label: string;
  data: Array<skillItemOrArrayItemProps>;
}

type skillObjectProps = {
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
