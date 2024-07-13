import React from 'react';
import styles from './FieldLayout.module.css';

function FieldLayout({ field, onClick }) {
  return (
    <div className={styles.fieldLayout}>
      {field.map((cell, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          data-player={cell}
          className={styles.button}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}

export default FieldLayout;
