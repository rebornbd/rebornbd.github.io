import { AboutMe } from "./components/AboutMe";
import { Work } from "./components/Work";
import { Education } from "./components/Education";
import { Music } from "./components/Music";
import styles from "./About.module.css";


const About = () => {
  return (
    <div className={styles.container}>
      <AboutMe />
      <div className={styles.innerContainer}>
        <Work />
        <Education />
      </div>
      <Music />
    </div>
  )
}

export default About;
