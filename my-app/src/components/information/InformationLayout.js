import React from 'react';
import styles from './InformationLayout.module.css';

function InformationLayout({ status }) {
  return (
    <div className={styles.information}>
      <p className={styles.status}>{status}</p>
    </div>
  );
}

export default InformationLayout;
