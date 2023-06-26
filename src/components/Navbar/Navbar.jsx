import React from "react";
import styles from "./Navbar.module.scss";
import { ICONS } from "../../icons";
import profile from "../../assets/image3.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>InternBrand</div>
      <div className={styles.center}>
        <div className={styles.navBtn}>
          {ICONS.clipboardtext} Browse Listings
        </div>
        <div className={styles.navBtn}>
          {ICONS.tasksquare} Application History
        </div>
        <div className={styles.navBtn}>{ICONS.edit} Blog</div>
        <div className={styles.navBtn}>{ICONS.messagequestion} Contact Us</div>
      </div>
      <div className={styles.right}>
        {ICONS.notification}
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
