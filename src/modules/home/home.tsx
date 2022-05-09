import Typewriter from 'typewriter-effect';
import { useHistory } from "react-router-dom";
import React from 'react'
import styles from "./home.module.css";


const Home = () => {
	const history = useHistory();

  const innerHeight = window?.innerHeight;
  const marginTop = Math.floor(innerHeight / 3);
  const iLikes = [
    "Coding.",
    "Software Development.",
    "Problem Solving.",
    "Cricket.",
    "Books."
  ];

  const getHostname = () => {
    const protocol = window.location.protocol;
    const host = window.location.host;
    const hostName = `${protocol}//${host}`;
    return hostName;
  }

  const resumeDownloadHandler = () => {
    const hostName = getHostname();
    const url = `${hostName}/dipta-dhar-resume.pdf`;
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;

    // console.log(newWindow);
  }

  const TouchAndResume = () => {
    return (
      <div className={styles.touchAndResumeContent}>
        <div
          onClick={() => history.push("/contact")}
          className={styles.touch}>
          Get In Touch
        </div>

        <div
          onClick={resumeDownloadHandler}
          className={styles.resume}>
          Download Resume
        </div>
      </div>
    )
  }

  
  return (
    <div className={styles.container} style={{ minHeight: `${innerHeight}px` }}>
      <div className={styles.heading} style={{ marginTop: `-${marginTop}px` }}>
        <div className={styles.fixedHeading}>
          <div className={styles.message}>
            HEY! I AM
          </div>
          <div className={styles.name}>
            Dipta Dhar
          </div>
          <div className={styles.designation}>
            I am a Full-Stack Developer
          </div>
        </div>

        <div className={styles.dynamicHeading}>
          <div className={styles.fixedContext}>
            I Love&nbsp;
          </div>

          <Typewriter
            options={{
              strings: iLikes,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <TouchAndResume />
    </div>
  )
}

export default Home;
