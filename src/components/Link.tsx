import { IconType } from 'react-icons/lib';
import React from 'react';
import styles from "./Link.module.css";


interface linkProps {
  url: string;
  
  text?: string;
  Icon?: IconType;
  color?: string;
  bgColor?: string;
  width?: number | "100%";
  height?: number | "100%";
  fontSize?: number | "inherit";
  fontWeight?: number | "inherit";
  padding?: number | string;
}

export const Link = ({
  url,
  text,
  Icon,
  color="inherit",
  bgColor="inherit",
  width,
  height,
  fontSize="inherit",
  fontWeight="inherit",
  padding=0
}: linkProps) => {
  const ICON = (Icon) ? <Icon className={styles.icon} /> : "";
  const TEXT = (text) ? <span className={styles.text}>{text}</span> : "";
  const VALUE = <div className={styles.valueContainer}>{ICON} {TEXT}</div>;
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.aTag}
      style={{
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        width: width,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
        padding: padding
      }}
    >{VALUE}</a>
  )
}
