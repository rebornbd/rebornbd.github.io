import { IconType } from 'react-icons/lib';
import {
  LinkedinIcon,
  DiscordIcon,
  GithubIcon,
  StackoverflowIcon,
} from "../components/icons";


export interface socialProps {
  title: string;
  icon: IconType;
  link: string;
}

export const SOCIALS: Array<socialProps> = [
  {
    title: "Github",
    icon: GithubIcon,
    link: "https://github.com/rebornbd",
  },
  {
    title: "Linkedin",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/diptadhar/",
  },
  {
    title: "Stackoverflow",
    icon: StackoverflowIcon,
    link: "https://stackoverflow.com/users/13161183",
  },
  {
    title: "Discord",
    icon: DiscordIcon,
    link: "https://discord.com/users/901771209929289798",
  },
];
