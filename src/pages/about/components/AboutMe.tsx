import React, { useState, useEffect } from "react";

import {
  Heading,
  Image,
  InsertInnerHtml
} from "../../../components";
import {
  aboutmeMarkdownSrc
} from "../../../markdown";
import { PersonIcon } from "../../../components/Icons";
import AboutmeLogo from "../../../images/about/about-me.svg";
import styles from "./AboutMe.module.css";


export const AboutMe = () => {
  const [aboutmeMDText, setAboutmeMDText] = useState("");

  useEffect(() => {
    fetch(aboutmeMarkdownSrc)
      .then(res => res.text())
      .then(res => {
        setAboutmeMDText(res);
      })
  }, []);


  return (
    <div className={styles.contentAboutMe}>
      <Heading
        icon={PersonIcon}
        title="About Me"
        mb={20}
      />

      <div className={styles.innerContent}>
        <Image
          src={AboutmeLogo}
          flex={1}
        />

        <InsertInnerHtml
          text={aboutmeMDText}
          fontSize={16}
          fontWeight={400}
          flex={3}
        />
      </div>
    </div>
  )
}
