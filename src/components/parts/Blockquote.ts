import styled from 'styled-components';

export const Blockquote = styled.blockquote`
  margin: 0 0 0 1rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-left: 0.25rem solid #aac8ff;
  font-size: 1rem;
  line-height: 1.5;
  * + & {
    margin-top: 1.5rem;
  }
`;
