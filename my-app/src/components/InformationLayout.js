import React from 'react';
import styles from './InformationLayout.module.css';

function InformationLayout({ status }) {
  return (
    <div className={styles.informationLayout}>
      <h2>{status}</h2>
    </div>
  );
}

export default InformationLayout;
