import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const RadioButtonWrapper = styled.span`
  display: inline-flex;
  margin-right: 1rem;
  gap: 0.5rem;
`;

export const RadioButton = ({
  children,
  name,
  value,
  id,
  checked,
  onChange,
}: {
  children: React.ReactChild;
  name?: string;
  value?: string;
  id?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}): JSX.Element => (
  <RadioButtonWrapper>
    <input type="radio" name={name} value={value} id={id} checked={checked} onChange={onChange} />
    <div>{children}</div>
  </RadioButtonWrapper>
);
