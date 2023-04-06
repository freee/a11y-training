import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Settings } from './Settings';
import { Footer } from './Footer';
import { ContentsContext } from './contents';
import { publicPath } from '../utils/publicPath';
import { NavigationContent } from './NavigationContent';

const Header = styled.header`
  padding: 1rem 4rem;
  background: #2864f0;
  @media screen and (max-width: 48rem) {
    padding: 0.5rem 1rem;
  }
`;
const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  color: #fff;
  margin: 0;
  @media screen and (max-width: 48rem) {
    display: block;
    font-size: 1.2rem;
  }
`;
const Main = styled.main`
  padding: 2rem 4rem 0;
  max-width: 60rem;
  @media screen and (max-width: 48rem) {
    padding: 1rem 1rem 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  @media screen and (max-width: 48rem) {
    display: block;
  }
`;
const Navigation = styled.nav`
  padding: 2rem 2rem 0;
  min-width: 14rem;
  @media screen and (max-width: 48rem) {
    padding: 1rem 1rem 0;
    min-width: 100%;
  }
`;

export const Layout: React.FC<{ pathname: string }> = ({
  children,
  pathname,
}) => (
  <>
    <Head>
      <link rel="icon" href={publicPath('favicon.ico')} />
    </Head>
    <Header>
      <HeaderTitle>freee Accessibility Training</HeaderTitle>
    </Header>
    <Settings />
    <Container>
      <Main>
        <ContentsContext>{children}</ContentsContext>
      </Main>
      <Navigation>
        <NavigationContent pathname={pathname} />
      </Navigation>
    </Container>
    <Footer />
  </>
);
