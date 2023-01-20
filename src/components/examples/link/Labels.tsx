import * as React from 'react';
import { NoLinkUnderline } from './parts/NoLinkUnderline';
import { ExampleContainer } from '..';

export const GoodLabels: React.FC = () => (
  <ExampleContainer>
    <ul>
      <li>
        <a href="https://www.freee.co.jp/kakuteishinkoku/">
          個人事業主のお客様向けの案内ページ
        </a>
      </li>
      <li>
        <a href="https://www.freee.co.jp/houjin/">
          20名以下の法人のお客様向けの案内ページ
        </a>
      </li>
      <li>
        <a href="https://www.freee.co.jp/special/cloud-erp/professional/">
          20名以上の法人のお客様向けの案内ページ
        </a>
      </li>
    </ul>
  </ExampleContainer>
);

export const BadLabels: React.FC = () => (
  <ExampleContainer>
    <NoLinkUnderline>
      <ul>
        <li>
          個人事業主のお客様向けの案内ページは
          <a href="https://www.freee.co.jp/kakuteishinkoku/">こちら</a>
        </li>
        <li>
          20名以下の法人のお客様向けの案内ページは
          <a href="https://www.freee.co.jp/houjin/">こちら</a>
        </li>
        <li>
          20名以上の法人のお客様向けの案内ページは
          <a href="https://www.freee.co.jp/special/cloud-erp/professional/">
            こちら
          </a>
        </li>
      </ul>
    </NoLinkUnderline>
  </ExampleContainer>
);
