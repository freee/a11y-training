import * as React from 'react';
import { ExampleContainer } from '..';
import { Button } from '../../parts';

export const ButtonElement = (): JSX.Element => (
  <ExampleContainer>
    <Button type="button" onClick={() => window.alert('クリックされました')}>送信</Button>
  </ExampleContainer>
);

export const BadElement = (): JSX.Element => (
  <ExampleContainer>
    <Button as="span" onClick={() => window.alert('クリックされました')}>
      送信
    </Button>
  </ExampleContainer>
);

export const BadElementWithGoodRole = (): JSX.Element => (
  <ExampleContainer>
    <Button
      as="span"
      onClick={() => window.alert('クリックされました')}
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.alert('クリックされました');
        }
      }}
    >
      送信
    </Button>
  </ExampleContainer>
);
