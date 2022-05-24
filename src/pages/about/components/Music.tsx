import React, { useState, useEffect } from "react";

import {
  Heading,
  InsertInnerHtml,
  Iframe
} from "../../../components";
import {
  musicMarkdownSrc
} from "../../../markdown";
import { MusicNoteIcon } from "../../../components/Icons";
import styles from "./Music.module.css";


export const Music = () => {
  const [musicMDText, setMusicMDText] = useState("");

  useEffect(() => {
    fetch(musicMarkdownSrc)
      .then(res => res.text())
      .then(res => {
        setMusicMDText(res);
        // console.log(res);
      })
  }, []);

  return (
    <div className={styles.musicContent}>
      <Heading icon={MusicNoteIcon} title="Music" />
      <InsertInnerHtml text={musicMDText} />
      <Iframe
        src="https://open.spotify.com/embed/playlist/2D86K0ACtMHtUKiEYer2FW?utm_source=generator"
      />
    </div>
  )
}
