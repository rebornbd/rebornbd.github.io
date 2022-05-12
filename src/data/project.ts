import ProPic1 from "../images/project/proPic1.jpg";
import ProPic2 from "../images/project/proPic2.jpg";
import ProPic3 from "../images/project/proPic3.jpeg";
import ProPic4 from "../images/project/proPic4.jpeg";
import ProPic5 from "../images/project/proPic5.jpg";


interface projectProps {
  image: string;
  title: string;
  description: string;
  tags: Array<string>;
  github?: string;
  website?: string;
}

export const PROJECT = [
  {
    image: ProPic1,
    title: "Reactive Resume",
    description: `A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever.`,
    github: "https://github.com/AmruthPillai/Reactive-Resume/",
    website: "https://rxresu.me/",
    tags: [
      "opensource",
      "webdev",
      "frontend",
      "react",
      "tailwindcss"
    ]
  },
];
