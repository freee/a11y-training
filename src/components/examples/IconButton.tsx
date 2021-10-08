import React from 'react';
import styles from '../../styles/Examples.module.css';

export const IconButton = ({
  ariaLabel,
  IconComponent,
  onClick,
}: {
  ariaLabel?: string;
  IconComponent: React.ComponentType;
  onClick?: React.MouseEventHandler;
}): JSX.Element => {
  return (
    <button
      className={styles.IconButton}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.IconButton__icon}>
        <IconComponent />
      </span>
    </button>
  );
};
