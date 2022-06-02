import ProPic1 from "../images/project/proPic1.png";
import ProPic2 from "../images/project/proPic2.png";
import ProPic3 from "../images/project/proPic3.png";
import ProPic4 from "../images/project/proPic4.png";


export interface projectProps {
  image: string;
  title: string;
  description: string;
  tags: Array<string>;
  github?: string;
  website?: string;
}

export const PROJECTS: Array<projectProps> = [
  {
    image: ProPic1,
    title: "WEBbot",
    description: `WEBbot is a scalable web crawler. Its backend uses Python/Django, Celery for asynchronous task queue. Frontend uses react. This crawler takes single or multiple seed-URL & crawling these pages.`,
    github: "https://github.com/rebornbd/WEBbot",
    tags: [
      "Python/Django",
      "Celery",
      "RabbitMQ",
      "Requests",
      "BeautifulSoup",
      "React",
      "Javascript"
    ]
  },
  {
    image: ProPic2,
    title: "IPbox",
    description: `IPbox is an IP management web application. It prevents duplicate IP assign. Its design on a rack server-based architecture.`,
    github: "https://github.com/rebornbd/IPbox",
    tags: [
      "Python/Django",
      "MySQL",
      "Javascript",
      "HTML/CSS"
    ]
  },
  {
    image: ProPic3,
    title: "Portfolio",
    description: `Personal portfolio website that is developed with react. Feature plan to build a backend that can update & store data efficiently & more user friendly.`,
    github: "https://github.com/rebornbd/rebornbd.github.io",
    website: "https://rebornbd.github.io/",
    tags: [
      "React",
      "Antd",
      "Javascript",
      "Typescript",
      "HTML/CSS"
    ]
  },
  {
    image: ProPic4,
    title: "Chess Master",
    description: `A simple chess game made using alphabetic characters in C.
    Use your mouse or touchpad to move the chess pieces.
    Features: (i) Shows the highlighted pieces (ii) Prevents user from making an illegal move (iii) Pawn promotion (iv) Save and Load your game`,
    github: "https://github.com/dipta-dhar/Chess-Master",
    tags: [
      "C++",
      "OpenGL",
      "Chess Tree"
    ]
  }
];
