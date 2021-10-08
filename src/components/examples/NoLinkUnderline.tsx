import React from 'react';
import styles from '../../styles/Examples.module.css';

export const NoLinkUnderline = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <div className={styles.NoLinkUnderline}>{children}</div>;
