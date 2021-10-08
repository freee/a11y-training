import React from 'react';
import styles from '../../styles/Examples.module.css';

export const ButtonLikeLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}): JSX.Element => (
  <a className={styles.ButtonLikeLink} href={href}>
    {children}
  </a>
);
