// RelatedChecks.tsx
import React from 'react';

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
  const HeaderTag = `h${headerLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div>
      <HeaderTag>{headerText}</HeaderTag>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <a href={`${baseURL}${id}`}>チェックID：{id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RelatedChecks };
