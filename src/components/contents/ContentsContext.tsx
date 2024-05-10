import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { Blockquote, H2, H3, H4, H5, Li, Ol, P, TextLink, Ul } from '../parts';
import Link from 'next/link';

const components: React.ComponentProps<typeof MDXProvider>['components'] = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a: ({ href, ref, ...props }) => (
    <Link passHref={true} href={href || ''}>
      <TextLink {...props} />
    </Link>
  ),
  p: P,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  wrapper: styled.section`
    & + & {
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid #e9e7e7;
    }

    dl {
      margin: 1rem 0;
    }
    dt {
      font-weight: bold;
    }
    dd {
      margin: 0.25em 0 0.5em 1em;
    }

    kbd,
    code {
      background: #f7f5f5;
      font-size: 80%;
      font-family: monospace;
      display: inline-block;
      padding: 0.1em 0.25em;
      margin: 0 0.25em 0 0;
    }
    * + kbd,
    * + code {
      margin-left: 0.25em;
    }
  `,
};

export const ContentsContext = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
