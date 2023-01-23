import * as React from 'react';
import { ExampleContainer } from '..';
import { TextLink, Ul, Li } from '../../parts';

export const GoodLabels: React.FC = () => (
  <ExampleContainer>
    <Ul>
      <Li>
        <TextLink href="https://www.freee.co.jp/kakuteishinkoku/">
          個人事業主のお客様向けの案内ページ
        </TextLink>
      </Li>
      <Li>
        <TextLink href="https://www.freee.co.jp/houjin/">
          20名以下の法人のお客様向けの案内ページ
        </TextLink>
      </Li>
      <Li>
        <TextLink href="https://www.freee.co.jp/special/cloud-erp/professional/">
          20名以上の法人のお客様向けの案内ページ
        </TextLink>
      </Li>
    </Ul>
  </ExampleContainer>
);

export const BadLabels: React.FC = () => (
  <ExampleContainer>
    <Ul>
      <Li>
        個人事業主のお客様向けの案内ページは
        <TextLink noUnderline href="https://www.freee.co.jp/kakuteishinkoku/">
          こちら
        </TextLink>
      </Li>
      <Li>
        20名以下の法人のお客様向けの案内ページは
        <TextLink noUnderline href="https://www.freee.co.jp/houjin/">
          こちら
        </TextLink>
      </Li>
      <Li>
        20名以上の法人のお客様向けの案内ページは
        <TextLink
          noUnderline
          href="https://www.freee.co.jp/special/cloud-erp/professional/"
        >
          こちら
        </TextLink>
      </Li>
    </Ul>
  </ExampleContainer>
);
