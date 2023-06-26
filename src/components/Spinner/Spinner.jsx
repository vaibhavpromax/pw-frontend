import React from 'react';
import styles from './Spinner.module.scss';

function Spinner({ className }) {
  return (
    <div className={styles.container}>
      <div className={[`${styles['lds-ring']} ${styles[`${className}`]}`]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
