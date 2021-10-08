import React from 'react';
import styles from '../../styles/Examples.module.css';

export const FakeButton = ({
  children,
  onClick,
  tabIndex,
  role,
  onKeyDown,
}: {
  children: string;
  onClick?: React.MouseEventHandler;
  tabIndex?: number;
  role?: string;
  onKeyDown?: React.KeyboardEventHandler;
}): JSX.Element => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <span
    className={styles.Button}
    onClick={onClick}
    tabIndex={tabIndex}
    role={role}
    onKeyDown={onKeyDown}
  >
    {children}
  </span>
);
