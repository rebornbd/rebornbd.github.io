import React from 'react'
import { useHistory, useParams } from 'react-router';
import styles from "./notfound.module.css";


const Notfound = () => {
  const history = useHistory();


  const onClickHandler = () => {
    history.push("/");
  }

  return (
    <div className={styles.container}>
      <span className={styles.message}>404!</span>
      <div className={styles.divHome}>
        go to &nbsp;
        <span onClick={onClickHandler}>HOME</span>
      </div>
    </div>
  )
}

export default Notfound;
