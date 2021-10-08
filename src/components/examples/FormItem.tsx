import React from 'react';
import styles from '../../styles/Examples.module.css';

export const FormItem: React.FC = ({ children }) => (
  <div className={styles.FormItem}>{children}</div>
);
