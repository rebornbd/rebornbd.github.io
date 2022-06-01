import * as REACT_TOAST from "react-hot-toast";
import React from "react";

import {
  CloseCircleOutlineIcon,
  CheckmarkCircleOutlineIcon,
  InformationCircleOutlineIcon,
  CloseCircleIcon,
} from "./Icons";
import styles from "./Toast.module.css";


type toastTypes = "success" | "error" | "normal";
const getStyle = (type: toastTypes) => {
  const STYLE: any = {};

  switch (type) {
    case "success":
      STYLE['backgroundColor'] = "#373985";
      STYLE['boxShadow'] = "3px 3px 5px #5a5eca";
      break;

    case "error":
      STYLE['backgroundColor'] = "#85266b";
      STYLE['boxShadow'] = "3px 3px 5px #be3f9d";
      break;

    default:
      STYLE['backgroundColor'] = "#e1923a";
      STYLE['boxShadow'] = "3px 3px 5px #f5ba80";
      break;
  }

  return STYLE;
}

const getIcon = (type: toastTypes) => {
  let ICON;

  switch (type) {
    case "success":
      ICON = <CheckmarkCircleOutlineIcon />;
      break;

    case "error":
      ICON = <CloseCircleOutlineIcon />;
      break;

    default:
      ICON = <InformationCircleOutlineIcon />;
      break;
  }
  return ICON;
}

const Toast = (type: toastTypes = "normal") => (text: string, duration: number = 60000) => {
  const ICON = getIcon(type);
  const STYLE = getStyle(type);

  REACT_TOAST.toast((t) => (
    <div className={styles.toastContainer}>
        <div className={styles.toastText}>{text}</div>

        <CloseCircleIcon
          onClick={() => REACT_TOAST.toast.dismiss(t.id)}
          className={styles.toastCloseButton}
        />
    </div>
  ),
  {
    icon: ICON,
    duration: duration,
    style: {
      margin: "0.2rem",
      width: "40rem",
      color: "#ffffff",
      fontWeight: "800",
      ...STYLE,
    }
  });
}

const success = Toast("success");
const error = Toast("error");
const info = Toast("normal");

export default {
  success, 
  error, 
  info
};
