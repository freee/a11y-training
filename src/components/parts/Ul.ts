import styled from 'styled-components';
export const Ul = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5em;
  line-height: 1.5;
  * + & {
    margin-top: 1rem;
  }
`;
