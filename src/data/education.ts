import BsmrstuIcon from "../images/education/bsmrstu.svg";
import SundaliIcon from "../images/education/sundali.svg";
import DkhIcon from "../images/education/dkh.svg";


export interface educationProps {
  icon: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
}

export const EDUCATION: Array<educationProps> = [
  {
    icon: BsmrstuIcon,
    title: "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
    subtitle: "BSc. in Engineering, CSE",
    location: "Gopalganj, Dhaka, Bangladesh",
    period: "2014 - 2018"
  },
  {
    icon: SundaliIcon,
    title: "Sundali S. T. School & College",
    subtitle: "HSC, Science",
    location: "Jashore, Dhaka, Bangladesh",
    period: "2012 - 2013"
  },
  {
    icon: DkhIcon,
    title: "D.K.H. High School",
    subtitle: "SSC, Science",
    location: "Jashore, Dhaka, Bangladesh",
    period: "2010 - 2011"
  }
];
