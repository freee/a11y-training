import * as React from 'react';
import { ExampleContainer } from '..';
import { FakeLink } from './parts/FakeLink';
import styles from '../../../styles/Examples.module.css';

export const GoodElement: React.FC = () => (
  <ExampleContainer>
    <a href="https://corp.freee.co.jp">freee株式会社</a>
  </ExampleContainer>
);

export const BadElementA: React.FC = () => (
  <ExampleContainer>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <a
      className={styles.FakeLink}
      onClick={() => {
        location.href = 'https://corp.freee.co.jp';
      }}
    >
      freee株式会社
    </a>
  </ExampleContainer>
);

export const BadElementSpan: React.FC = () => (
  <ExampleContainer>
    <FakeLink href="https://corp.freee.co.jp">freee株式会社</FakeLink>
  </ExampleContainer>
);
