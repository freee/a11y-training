import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { Li, Ol, TextLink, Ul } from '../parts';

const components: React.ComponentProps<typeof MDXProvider>['components'] = {
  a: TextLink,
  p: styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    * + & {
      margin-top: 1rem;
    }
  `,
  h2: styled.h2`
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: normal;
    line-height: 1.5;
  `,
  h3: styled.h3`
    margin: 0 0 1rem;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.5;
    * + & {
      margin-top: 2rem;
    }
  `,
  h4: styled.h4`
    margin: 0 0 1rem;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;

    * + & {
      margin-top: 1.5rem;
    }
  `,
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
