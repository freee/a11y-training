import * as React from 'react';
import { ExampleContainer } from '..';
import { TextLink, Button } from '../../parts';

export const GoodVisual: React.FC = () => (
  <ExampleContainer>
    <p>
      <TextLink href="https://corp.freee.co.jp">フリー株式会社</TextLink> では、
      <TextLink href="https://www.freee.co.jp/houjin/">freee会計</TextLink>や
      <TextLink href="https://www.freee.co.jp/hr/">freee人事労務</TextLink>
      といったプロダクトの開発・提供を通して、だれもが自由に自然体で経営できる環境をつくっていきます。
    </p>
    <p>
      フリー株式会社では、一緒にスモールビジネスを盛り上げていくエンジニア・デザイナー・プロダクトマネージャーを募集しています
    </p>
    <p>
      <Button as="a" href="https://jobs.freee.co.jp/">
        フリー株式会社の採用情報
      </Button>
    </p>
  </ExampleContainer>
);

export const BadVisual: React.FC = () => (
  <ExampleContainer>
    <p>
      <TextLink noUnderline href="https://corp.freee.co.jp">
        フリー株式会社
      </TextLink>{' '}
      では、
      <TextLink noUnderline href="https://www.freee.co.jp/houjin/">
        freee会計
      </TextLink>
      や
      <TextLink noUnderline href="https://www.freee.co.jp/hr/">
        freee人事労務
      </TextLink>
      といったプロダクトの開発・提供を通して、だれもが自由に自然体で経営できる環境をつくっていきます。
    </p>
    <p>
      フリー株式会社では、一緒にスモールビジネスを盛り上げていくエンジニア・デザイナー・プロダクトマネージャーを募集しています
    </p>
    <p>
      <TextLink noUnderline href="https://jobs.freee.co.jp/">
        フリー株式会社の採用情報
      </TextLink>
    </p>
  </ExampleContainer>
);
