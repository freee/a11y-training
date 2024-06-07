import React from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
  display: inline-flex;
  margin-right: 1rem;
  gap: 0.5rem;
`;

export const CheckBox = ({
  children,
  ...props
}: {
  children: React.ReactChild;
  name?: string;
  value?: string;
  id?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}): JSX.Element => (
  <CheckBoxWrapper>
    <input type="checkbox" {...props} />
    <div>{children}</div>
  </CheckBoxWrapper>
);
