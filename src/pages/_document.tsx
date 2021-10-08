import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';

const MyDocument = (): JSX.Element => (
  <Html lang="ja">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;

export const getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
