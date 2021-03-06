import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import styles from '../../styles/Content.module.css';

export const ContentsContext = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <MDXProvider
    components={{
      wrapper: (props: unknown) => (
        <section className={styles.contentSection} {...props} />
      ),
    }}
  >
    {children}
  </MDXProvider>
);
