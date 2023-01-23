import styled from 'styled-components';

export const ExampleContainer = styled.div`
  margin: 0;
  background: #f7f5f5;
  padding: 1.5rem;

  * + & {
    margin-top: 1rem;
  }
`;
