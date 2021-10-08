import React from 'react';
import styles from '../../styles/Examples.module.css';

export const NoFocusIndicator: React.FC = ({ children }) => (
  <div className={styles.NoFocusIndicator}>{children}</div>
);
