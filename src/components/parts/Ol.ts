import styled from 'styled-components';
export const Ol = styled.ol`
  margin: 0;
  padding: 0 0 0 1.5em;
  line-height: 1.5;
  * + & {
    margin-top: 1rem;
  }
`;
