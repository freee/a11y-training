import React from 'react';
import styles from '../../styles/Examples.module.css';

export const FakeIconButton = ({
  IconComponent,
  onClick,
}: {
  IconComponent: React.ComponentType;
  onClick?: React.MouseEventHandler;
}): JSX.Element => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <span className={styles.FakeIconButton} onClick={onClick}>
      <span className={styles.FakeIconButton__icon}>
        <IconComponent />
      </span>
    </span>
  );
};
