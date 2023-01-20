import * as React from 'react';
import { ButtonLikeLink } from './parts/ButtonLikeLink';
import { NoLinkUnderline } from './parts/NoLinkUnderline';
import { ExampleContainer } from '..';

export const GoodVisual: React.FC = () => (
  <ExampleContainer>
    <p>
      <a href="https://corp.freee.co.jp">freee株式会社</a> では、
      <a href="https://www.freee.co.jp/houjin/">freee会計</a>や
      <a href="https://www.freee.co.jp/hr/">freee人事労務</a>
      といったプロダクトの開発・提供を通して、だれもが自由に自然体で経営できる環境をつくっていきます。
    </p>
    <p>
      freee株式会社では、一緒にスモールビジネスを盛り上げていくエンジニア・デザイナー・プロダクトマネージャーを募集しています
    </p>
    <p>
      <ButtonLikeLink href="https://jobs.freee.co.jp/">
        freee株式会社の採用情報
      </ButtonLikeLink>
    </p>
  </ExampleContainer>
);

export const BadVisual: React.FC = () => (
  <ExampleContainer>
    <NoLinkUnderline>
      <p>
        <a href="https://corp.freee.co.jp">freee株式会社</a> では、
        <a href="https://www.freee.co.jp/houjin/">freee会計</a>や
        <a href="https://www.freee.co.jp/hr/">freee人事労務</a>
        といったプロダクトの開発・提供を通して、だれもが自由に自然体で経営できる環境をつくっていきます。
      </p>
      <p>
        freee株式会社では、一緒にスモールビジネスを盛り上げていくエンジニア・デザイナー・プロダクトマネージャーを募集しています
      </p>
      <p>
        <a href="https://jobs.freee.co.jp/">freee株式会社の採用情報</a>
      </p>
    </NoLinkUnderline>
  </ExampleContainer>
);
