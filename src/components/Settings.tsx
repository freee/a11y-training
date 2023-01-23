import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { CheckBox } from './parts';

const Container = styled.aside`
  padding: 0.5rem 4rem;
  background-color: #f7f5f5;
  font-size: 0.875rem;
  display: flex;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  @media screen and (max-width: 48rem) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Settings: React.FC = () => {
  const [grayScale, setGrayScale] = useState(false);
  const [hidePointer, setHidePointer] = useState(false);
  return (
    <Container>
      <Head>
        <style>{grayScale ? '*{filter:grayscale(100%) !important' : ''}</style>
        <style>
          {hidePointer
            ? '*{cursor:none !important;pointer-events:none !important}*:focus{cursor: none !important;pointer-events:none !important}'
            : ''}
        </style>
      </Head>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <CheckBox
          checked={grayScale}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGrayScale(e.target.checked)
          }
        >
          グレースケール表示
        </CheckBox>
      </label>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <CheckBox
          checked={hidePointer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHidePointer(e.target.checked)
          }
        >
          マウスポインタ無効
        </CheckBox>
      </label>
    </Container>
  );
};
