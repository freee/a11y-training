import React from 'react';
import styles from '../../styles/Examples.module.css';

export const CheckBox = ({
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
  <span className={styles.CheckBox}>
    <input type="checkbox" name={name} value={value} id={id} />
    {children}
  </span>
);
