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

  BackendIcon,
  FrontendIcon,
  CrossPlatformIcon,
  DatabaseIcon,
  LanguageIcon,
} from "../components/icons";


export type skillItemProps = {
  label: string;
  icon: IconType;
}

export type skillItemOrArrayItemProps = 
  skillItemProps |
  [skillItemProps, skillItemProps]

export type skillItemsProps = {
  icon: IconType;
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
    icon: BackendIcon,
    label: "Backend",
    data: [
      [{ label: "Node JS", icon: NodejsIcon }, { label: "Express JS", icon: ExpressjsIcon }],
      [{ label: "Python", icon: PythonIcon }, { label: "Django", icon: DjangoIcon }],
      // [{ label: "Java", icon: JavaIcon }, { label: "Springboot", icon: SpringbootIcon }]
    ]
  },

  frontend: {
    icon: FrontendIcon,
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
    icon: CrossPlatformIcon,
    label: "Cross Platform",
    data: [
      [{ label: "Dart", icon: DartIcon }, { label: "Flutter", icon: FlutterIcon }],
    ]
  },

  language: {
    icon: LanguageIcon,
    label: "Language",
    data: [
      { label: "Javascript", icon: JavascriptIcon },
      { label: "Typescript", icon: TypescriptIcon },
      { label: "Python", icon: PythonIcon },
      [{ label: "C", icon: CIcon }, { label: "C++", icon: CplusplusIcon }],
      { label: "Java", icon: JavaIcon },
    ]
  },

  database: {
    icon: DatabaseIcon,
    label: "Database",
    data: [
      { label: "MySQL", icon: MySQLIcon },
      { label: "PostgreSQL", icon: PostgresqlIcon },
      { label: "MongoDB", icon: MongodbIcon },
    ]
  }
}
