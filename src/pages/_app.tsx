import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <Layout pathname={router.pathname}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
