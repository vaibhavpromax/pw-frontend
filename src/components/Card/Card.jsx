import React from "react";
import styles from "./Card.module.scss";

import Logo from "../../assets/companyLogo1.png";
import { ICONS } from "../../icons";
import TagBar from "../TagBar/TagBar";
import { getSkillsArray } from "../../utils/getSkillsArray";

const Card = ({ listing, setSelected, selected }) => {
  return (
    <div
      onClick={() => {
        setSelected(listing?.company_id);
      }}
      className={`${styles.card} ${
        listing?.company_id == selected ? styles.active : ""
      }`}
    >
      <div className={styles.top}>
        <div className={styles.left}>
          <h4>{listing?.position}</h4>
          <h5>{listing?.name}</h5>
        </div>
        <div className={styles.right}>{ICONS.bookmarkDark}</div>
      </div>
      <div className={styles.center}>
        <div className={styles.left}>
          <img src={listing?.company_logo} alt="" />
        </div>
        <div className={styles.right}>
          <TagBar options={getSkillsArray(listing?.skills)} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.info}>
          {ICONS.timer}
          <b>{listing?.duration} Months</b>
        </div>
        <div className={styles.info}>
          {ICONS.wallet}
          <b>
            ₹{listing?.stipend_min}-₹{listing?.stipend_max}
          </b>
        </div>
        <div className={styles.info}>
          {ICONS.user}
          <b>{listing?.total_applicants}</b>Applicants
        </div>
        <div className={styles.info}>
          {ICONS.clipboardclose}
          Ends in
          <b>
            {new Date(listing?.expiry_date).getDay() - new Date().getDay()} days
          </b>
        </div>
      </div>
    </div>
  );
};

export default Card;
