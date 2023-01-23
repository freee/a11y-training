import React from 'react';
import styled from 'styled-components';

const IconButtonStyle = styled.button`
  display: inline-block;
  width: 5rem;
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
  padding: 0.5rem 0;
  &:hover {
    color: #2864f0;
    border-color: #2864f0;
    background-color: #ebf3ff;
  }

  .icon {
    vertical-align: middle;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;
export const IconButton = ({
  IconComponent,
  ...props
}: {
  IconComponent: React.ComponentType;
} & React.ComponentProps<typeof IconButtonStyle>): JSX.Element => (
  <IconButtonStyle {...props}>
    <span className="icon">
      <IconComponent />
    </span>
  </IconButtonStyle>
);
