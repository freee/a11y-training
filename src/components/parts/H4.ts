import styled from 'styled-components';
export const H4 = styled.h4`
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;

  * + & {
    margin-top: 1.5rem;
  }
`;
