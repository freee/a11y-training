import React from 'react';
import styles from '../../styles/Examples.module.css';

export const BadTelField = (): JSX.Element => (
  <span className={styles.TelField}>
    <input type="tel" autoComplete="tel-area-code" /> -{' '}
    <input type="tel" autoComplete="tel-local-prefix" /> -{' '}
    <input type="tel" autoComplete="tel-local-suffix" />
  </span>
);
