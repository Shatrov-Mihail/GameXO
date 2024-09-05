import React from 'react';
import styles from './FieldLayout.module.css';

function FieldLayout({ field, onClick }) {
  return (
    <div className={styles.field}>
      {field.map((value, index) => (
        <button key={index} className={styles.cell} onClick={() => onClick(index)}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default FieldLayout;

