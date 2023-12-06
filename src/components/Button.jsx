import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'; // Import a default icon
import React from 'react';
import styles from './Button.module.css';

export default function Button({ icon, onClick, children, color, outlineColor }) {
  const customStyles = {
    '--outline-color': outlineColor || '#000',
  };

  return (
    <button className={`btn btn-${color} ${styles.btnCustom}`} onClick={onClick} style={customStyles}>
      {children}
      <span className={styles.icon}>
        {icon ? (
          <FontAwesomeIcon icon={icon} style={{ color: '#ffffff' }} />
        ) : (
          <FontAwesomeIcon icon={faLayerGroup} style={{ color: '#ffffff' }} />
        )}
      </span>
    </button>
  );
}
