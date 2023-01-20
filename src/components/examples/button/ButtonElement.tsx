import * as React from 'react';
import { ExampleContainer } from '..';
import { Button } from './parts/Button';
import { FakeButton } from './parts/FakeButton';

export const ButtonElement = () =>
  <ExampleContainer>
    <Button onClick={() => window.alert('クリックされました')}>送信</Button>
  </ExampleContainer>

export const BadElement = () =>
  <ExampleContainer>
    <FakeButton onClick={() => window.alert('クリックされました')}>送信</FakeButton>
  </ExampleContainer>

export const BadElementWithGoodRole = () =>
  <ExampleContainer>
    <FakeButton
      onClick={() => window.alert('クリックされました')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.alert('クリックされました');
        }
      }}
    >
      送信
    </FakeButton>
  </ExampleContainer>

