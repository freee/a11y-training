import React from 'react';
import styles from '../../styles/Examples.module.css';

export const FormAnnotation: React.FC = ({ children }) => (
  <p className={styles.FormAnnotation}>{children} </p>
);
