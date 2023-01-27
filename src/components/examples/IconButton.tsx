import React from 'react';
import styles from '../../styles/Examples.module.css';

export const IconButton = ({
  ariaLabel,
  iconLabel,
  ariaPressed,
  text,
  IconComponent,
  onClick,
}: {
  ariaLabel?: string;
  iconLabel?: string;
  ariaPressed?: boolean;
  text?: string;
  IconComponent: React.ComponentType;
  onClick?: React.MouseEventHandler;
}): JSX.Element => {
  return (
    <button
      className={styles.IconButton}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      onClick={onClick}
    >
      <span className={styles.IconButton__icon} aria-label={iconLabel}>
        <IconComponent />
      </span>
      {text && <span className={styles.IconButton__text}>{text}</span>}
    </button>
  );
};
