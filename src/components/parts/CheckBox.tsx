import React from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.span`
  display: inline-block;
  margin-right: 1rem;
`;
const CheckBoxInput = styled.input`
  margin-right: 0.5rem;
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
  onChange?: React.ChangeEventHandler;
}): JSX.Element => (
  <CheckBoxWrapper>
    <CheckBoxInput type="checkbox" {...props} />
    {children}
  </CheckBoxWrapper>
);
