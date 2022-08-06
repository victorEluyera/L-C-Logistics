import { Typography } from "antd";
import React from "react";
import { FaOpencart } from "react-icons/fa";
import styles from "./Splash.module.scss";

const { Text, Title } = Typography;
function Splash() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {/* <div className={styles.splash_head}> */}
        <span className={styles.larry}>Larry</span>
        <span className={styles.icon}>
          <FaOpencart />
        </span>
        <span className={styles.and}> &</span>
        <span className={styles.comrade}>Comrades</span>
        <span className={styles.logistics}>Logistics</span>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Splash;
