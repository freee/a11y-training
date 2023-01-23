import styled from 'styled-components';

export const TextLink = styled.a<{ noUnderline?: boolean }>`
  color: #285ac8;
  transition-duration: 0.3s;
  transition-property: color;
  cursor: pointer;
  ${({ noUnderline }) =>
    `text-decoration: ${noUnderline ? 'none' : 'underline'};`}

  &:hover {
    color: #2864f0;
    text-decoration: underline;
  }
`;
