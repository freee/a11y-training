import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  min-width: 5rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1rem;
  font-weight: bold;
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
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px #fff, 0 0 0 4px #73a5ff, 0 0 0 5px #fff;
  }
`;
