import styled from 'styled-components';
export const H3 = styled.h3`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.5;
  * + & {
    margin-top: 2rem;
  }
`;
