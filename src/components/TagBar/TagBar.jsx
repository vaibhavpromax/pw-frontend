import React from "react";
import styles from "./TagBar.module.scss";
const TagBar = ({ options }) => {
  const remaining = options?.length - 3;
  return (
    <div className={styles.tagbar}>
      {options[0] && <div className={styles.tag}>{options[0]}</div>}
      {options[1] && <div className={styles.tag}>{options[1]}</div>}
      {options[2] && <div className={styles.tag}>{options[2]}</div>}

      {remaining > 0 && (
        <div className={`${styles.tag} ${styles.rem}`}>+{remaining}</div>
      )}
    </div>
  );
};

export default TagBar;
