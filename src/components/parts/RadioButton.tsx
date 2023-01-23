import React from 'react';
import styled from 'styled-components';

const RadioButtonWrapper = styled.span`
  display: inline-block;
  margin-right: 1rem;
`;
const RadioButtonInput = styled.input`
  margin-right: 0.5rem;
`;

export const RadioButton = ({
  children,
  name,
  value,
  id,
}: {
  children: React.ReactChild;
  name: string;
  value?: string;
  id?: string;
}): JSX.Element => (
  <RadioButtonWrapper>
    <RadioButtonInput type="radio" name={name} value={value} id={id} />
    {children}
  </RadioButtonWrapper>
);
