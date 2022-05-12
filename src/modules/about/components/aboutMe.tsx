import moment from 'moment';
import { marked } from "marked";
import React, { useState, useEffect } from 'react';

import {
  aboutMeItemsProps,
  aboutMeProps
} from "../../../data/about/about";
import me from "../../../data/about/me.md";
import styles from "./aboutMe.module.css";


export const AboutMe = ({ aboutMe }: { aboutMe: aboutMeProps }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch(me)
      .then(res => res.text())
      .then(res => {
        // console.log(me, res);
        setText(res);
      })
  })

  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutMeDivIcon}>
        <img
          src={aboutMe.data.icon}
          alt={`aboutMe pic`}
          width="auto"
          height={200}
          className={styles.aboutmeIcon} />
      </div>

      <div className={styles.aboutmeBio}>
        {aboutMe.data.bio}
        <div dangerouslySetInnerHTML={{ __html: marked.parse(text) }}></div>
      </div>
    </div>
  )
}
