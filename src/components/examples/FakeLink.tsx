import React from 'react';
import styles from '../../styles/Examples.module.css';

export const FakeLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}): JSX.Element => (
  /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,  jsx-a11y/no-static-element-interactions */
  <span
    className={styles.FakeLink}
    onClick={() => {
      location.href = href;
    }}
  >
    {children}
  </span>
);
