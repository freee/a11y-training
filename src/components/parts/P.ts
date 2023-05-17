import styled from 'styled-components';

export const P = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  * + & {
    margin-top: 1rem;
  }
`;
