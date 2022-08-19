import React from "react";
import { AiFillHome, AiOutlinePhone } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.nav_root}>
      <div className="d-flex justify-space-around">
        <div>
          <AiFillHome size={40} className={styles.nav_icon} />
        </div>
        <div>
          <FaWallet size={40} className={styles.nav_icon} />
        </div>
        <div>
          <MdLocalShipping size={40} className={styles.nav_icon} />
        </div>
        <div>
          <AiOutlinePhone size={40} className={styles.nav_icon} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
