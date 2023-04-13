import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { H2, H3, H4, Li, Ol, TextLink, Ul } from '../parts';
import Link from 'next/link';

const components: React.ComponentProps<typeof MDXProvider>['components'] = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a: ({ href, ref, ...props }) => (
    <Link passHref={true} href={href || ''}>
      <TextLink {...props} />
    </Link>
  ),
  p: styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    * + & {
      margin-top: 1rem;
    }
  `,
  h2: H2,
  h3: H3,
  h4: H4,
  ul: Ul,
  ol: Ol,
  li: Li,
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
