import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  min-width: 5rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1rem;
  text-decoration: none;
  padding: 0 1rem;
  border-radius: 1.5rem;
  border: 0;
  background: #fff;
  color: #323232;
  border: 1px solid #d7d2d2;
  text-align: center;
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    color: #2864f0;
    border-color: #2864f0;
    background-color: #ebf3ff;
  }
`;
