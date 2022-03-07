import ProPic1 from "./assets/proPic1.jpg";
import ProPic2 from "./assets/proPic2.jpg";
import ProPic3 from "./assets/proPic3.jpeg";
import ProPic4 from "./assets/proPic4.jpeg";
import ProPic5 from "./assets/proPic5.jpg";


export type proType = {
  readonly name: string
  readonly desc: string
  readonly picSrc?: string,
  readonly gitLink?: string
  readonly hostLink?: string
  readonly stacks?: Array<string>
}

export const PROJECTS: Array<proType> = [
  {
    name: 'Hana Bana', 
    desc: `Input to render when an input is required. If the select is not 
            searchable, a dummy input is rendered instead. If the select is disabled, 
            a div of the correct size and shape is rendered.Input to render when an input 
            is required. If the select is not searchable, a dummy input is rendered instead.`,
    
    picSrc: ProPic1,
    gitLink: 'https://github.com/username/hanabana', 
    hostLink: 'https://hanabana.com',
    stacks: [
      "node js",
      "react",
      "docker",
      "aws"
    ]
  },
  {
    name: 'Web Crawler', 
    desc: `Input to render when an input is required. If the select is not 
            searchable, a dummy input is rendered instead. If the select is disabled, 
            a div of the correct size and shape is rendered.Input to render when an input 
            is required. If the select is not searchable, a dummy input is rendered instead.`,
    
    picSrc: ProPic2,
    gitLink: 'https://github.com/username/hanabana', 
    hostLink: 'https://hanabana.com',
    stacks: [
      "node js",
      "react",
      "docker",
      "aws"
    ]
  },
  {
    name: 'Hana Bana', 
    desc: `Input to render when an input is required. If the select is not 
            searchable, a dummy input is rendered instead. If the select is disabled, 
            a div of the correct size and shape is rendered.Input to render when an input 
            is required. If the select is not searchable, a dummy input is rendered instead.`,
    
    picSrc: ProPic3,
    gitLink: 'https://github.com/username/hanabana', 
    hostLink: 'https://hanabana.com',
    stacks: [
      "node js",
      "react",
      "docker",
      "aws"
    ]
  },
  {
    name: 'Hana Bana', 
    desc: `Input to render when an input is required. If the select is not 
            searchable, a dummy input is rendered instead. If the select is disabled, 
            a div of the correct size and shape is rendered.Input to render when an input 
            is required. If the select is not searchable, a dummy input is rendered instead.`,
    
    picSrc: ProPic4, 
    gitLink: 'https://github.com/username/hanabana', 
    hostLink: 'https://hanabana.com',
    stacks: [
      "node js",
      "react",
      "docker",
      "aws"
    ]
  },
  {
    name: 'Hana Bana', 
    desc: `Input to render when an input is required. If the select is not 
            searchable, a dummy input is rendered instead. If the select is disabled, 
            a div of the correct size and shape is rendered.Input to render when an input 
            is required. If the select is not searchable, a dummy input is rendered instead.`,
    
    picSrc: ProPic5,
    gitLink: 'https://github.com/username/hanabana', 
    hostLink: 'https://hanabana.com',
    stacks: [
      "node js",
      "react",
      "docker",
      "aws"
    ]
  },

  // {
  //   name: '', 
  //   desc: ``, 
  //   pic: <img />, 
  //   gitLink: '', 
  //   hostLink: '',
  //   stacks: [
  // 
  // ]
  // },
];
