import React from 'react';
import styled from 'styled-components';
const FooterStyle = styled.footer`
  padding: 4rem 4rem 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 48rem) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const FooterP = styled.p`
  color: #6e6b6b;
  font-size: 0.75rem;
  margin: 0; & + & {
    margin-top: 0.5rem;
  }
`;
const FooterA = styled.a`
  color: #6e6b6b;
  transition-duration: 0.3s;
  transition-property: color;
  &:hover {
    color: #23418c;
  }
`;
export const Footer = ():JSX.Element => (
  <FooterStyle>
    <FooterP>&copy; freee K.K.</FooterP>
    <FooterP>
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img
          alt="CC BY 4.0"
          style={{ borderWidth: 0 }}
          src="https://i.creativecommons.org/l/by/4.0/88x31.png"
        />
      </a>
      <br />
      このページは
      <FooterA rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        クリエイティブ・コモンズ 表示 4.0 国際 ライセンス
      </FooterA>
      の下に提供されています。
    </FooterP>
  </FooterStyle>
);
