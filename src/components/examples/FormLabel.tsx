import React from 'react';
import styles from '../../styles/Examples.module.css';

export const FormLabel: React.FC = ({ children }) => (
  <span className={styles.FormLabel}>{children}</span>
);
