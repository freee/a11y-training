import React from 'react';
import styles from '../../styles/Examples.module.css';

export const TelField = (): JSX.Element => (
  <span className={styles.TelField}>
    <input type="tel" autoComplete="tel-area-code" aria-label="市外局番" /> -{' '}
    <input type="tel" autoComplete="tel-local-prefix" aria-label="市内局番" /> -{' '}
    <input type="tel" autoComplete="tel-local-suffix" aria-label="加入者番号" />
  </span>
);
