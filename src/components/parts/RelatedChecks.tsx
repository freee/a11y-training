// RelatedChecks.tsx
import React from 'react';
import { Ul, Li, TextLink, H2, H3, H4, H5 } from '.';

type RelatedChecksProps = {
  ids: string[];
  headerText?: string;
  headerLevel?: number;
  baseURL?: string;
};

const RelatedChecks: React.FC<RelatedChecksProps> = ({
  ids,
  headerText = '関連するチェック',
  headerLevel = 4,
  baseURL = 'https://a11y-guidelines.freee.co.jp/checks/checklist.html#check-',
}) => {
  const renderHeader = () => {
    const HeaderTag = `h${headerLevel}` as keyof JSX.IntrinsicElements;
    switch (headerLevel) {
      case 2:
        return <H2>{headerText}</H2>;
      case 3:
        return <H3>{headerText}</H3>;
      case 4:
        return <H4>{headerText}</H4>;
      case 5:
        return <H5>{headerText}</H5>;
      default:
        return <HeaderTag>{headerText}</HeaderTag>;
    }
  };
  return (
    <>
      {renderHeader()}
      <Ul>
        {ids.map((id) => (
          <Li key={id}>
            <TextLink href={`${baseURL}${id}`}>チェックID：{id}</TextLink>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export { RelatedChecks };
