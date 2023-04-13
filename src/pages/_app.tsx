import React, { useEffect, useRef } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

function MyApp({
  Component,
  pageProps,
  router: { pathname, asPath },
}: AppProps): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current && ref.current) {
      (
        (ref.current.querySelector(
          '[tabindex], a, button, input, select, textarea'
        ) || ref.current) as HTMLElement
      ).focus();
    }
    renderedRef.current = true;
  }, [asPath]);

  return (
    <Layout pathname={pathname} ref={ref}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
