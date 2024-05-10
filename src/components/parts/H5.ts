import styled from 'styled-components';
export const H5 = styled.h5`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.5;

  * + & {
    margin-top: 1.5rem;
  }
`;
