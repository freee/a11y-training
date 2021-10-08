import React from 'react';
import styles from '../../styles/Examples.module.css';

export const RadioButton = ({
  children,
  name,
  value,
  id,
}: {
  children: React.ReactChild;
  name: string;
  value?: string;
  id?: string;
}): JSX.Element => (
  <span className={styles.RadioButton}>
    <input type="radio" name={name} value={value} id={id} />
    {children}
  </span>
);
