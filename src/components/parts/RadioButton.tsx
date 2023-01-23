import React from 'react';
import styled from 'styled-components';

const RadioButtonWrapper = styled.span`
  display: inline-flex;
  margin-right: 1rem;
  gap: 0.5rem
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
    <input type="radio" name={name} value={value} id={id} />
    <div>{children}</div>
  </RadioButtonWrapper>
);
