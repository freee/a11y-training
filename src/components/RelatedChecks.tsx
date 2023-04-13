// RelatedChecks.tsx
import React, { ReactNode } from 'react';

type RelatedChecksProps = {
  children: ReactNode;
  headerText?: string;
  headerLevel?: number;
  baseURL?: string;
}

const RelatedChecks: React.FC<RelatedChecksProps> = ({
  children,
  headerText = '関連するチェック内容',
  headerLevel = 4,
  baseURL = 'https://a11y-guidelines.freee.co.jp/checks/checklist.html#check-'
}) => {
  const HeaderTag = `h${headerLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div>
      <HeaderTag>{headerText}</HeaderTag>
      <ul>
        {React.Children.map(children, (child) => {
          if (child && typeof child === 'object' && 'type' in child && child.type.displayName === 'Check') {
            const href = `${baseURL}${child.props.id}`;
            return (
              <li>
                <a href={href}>チェックID：{child.props.id}</a>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

type CheckProps = {
  id: string;
  children?: ReactNode;
}

const Check: React.FC<CheckProps> = ({ id, children }) => {
  return <>{children}</>;
};

Check.displayName = 'Check';

export { RelatedChecks, Check };
