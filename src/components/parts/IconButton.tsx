import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib';

const IconButtonStyle = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-width: 5rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: 0;
  background: #fff;
  color: #323232;
  border: 1px solid #d7d2d2;
  text-align: center;
  transition-property: background-color, border-color, color;
  transition-duration: 0.3s;
  cursor: pointer;
  padding: 0.5rem 1rem;
  &:hover {
    color: #2864f0;
    border-color: #2864f0;
    background-color: #ebf3ff;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
  }

  .text {
    font-size: 1rem;
    font-weight: bold;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;
export const IconButton = ({
  IconComponent,
  text,
  iconLabel,
  ...props
}: {
  IconComponent: IconType;
  text?: string;
  iconLabel?: string;
} & React.ComponentProps<typeof IconButtonStyle>): JSX.Element => (
  <IconButtonStyle {...props}>
    <span className="icon">
      <IconComponent aria-label={iconLabel} aria-hidden={iconLabel ? undefined : true} />
    </span>
    {text && <span className="text">{text}</span>}
  </IconButtonStyle>
);
