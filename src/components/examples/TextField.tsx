import React from 'react';
import styles from '../../styles/Examples.module.css';

export const TextField = ({
  type,
  id,
  placeholder,
}: {
  type?: 'text' | 'email' | 'password';
  id?: string;
  placeholder?: string;
}): JSX.Element => (
  <input
    className={styles.TextField}
    type={type}
    id={id}
    placeholder={placeholder}
  />
);
