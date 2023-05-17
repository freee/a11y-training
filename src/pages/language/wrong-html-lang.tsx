import * as React from 'react';
import { Title } from '../../components/Title';
import WrongHtmlLang from '../../components/contents/language/WrongHtmlLang.mdx';

const WrongHTMLLang = (): JSX.Element => {
  React.useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    const original = html.getAttribute('lang');
    html.setAttribute('lang', 'en');
    return () => {
      html.setAttribute('lang', original || '');
    };
  });
  return (
    <>
      <Title>ページの言語の指定が正しくない例</Title>
      <WrongHtmlLang />
    </>
  );
};

export default WrongHTMLLang;
