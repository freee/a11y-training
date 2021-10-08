import React from 'react';
import styles from '../../styles/Examples.module.css';

export const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: React.MouseEventHandler;
}): JSX.Element => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);
