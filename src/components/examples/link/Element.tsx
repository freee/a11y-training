import * as React from 'react';
import { ExampleContainer } from '..';
import { TextLink } from '../../parts';

export const GoodElement: React.FC = () => (
  <ExampleContainer>
    <TextLink href="https://corp.freee.co.jp">freee株式会社</TextLink>
  </ExampleContainer>
);

export const BadElementA: React.FC = () => (
  <ExampleContainer>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <TextLink
      onClick={() => {
        location.href = 'https://corp.freee.co.jp';
      }}
    >
      freee株式会社
    </TextLink>
  </ExampleContainer>
);

export const BadElementSpan: React.FC = () => (
  <ExampleContainer>
    <TextLink
      as="span"
      onClick={() => {
        location.href = 'https://corp.freee.co.jp';
      }}
    >
      freee株式会社
    </TextLink>
  </ExampleContainer>
);
