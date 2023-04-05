import React from 'react';
import Head from 'next/head';

export const Title = ({ children }: { children?: string }): JSX.Element => (
  <Head>
    <title>{children ? `${children} | ` : ''}freee Accessibility Training</title>
  </Head>
);
