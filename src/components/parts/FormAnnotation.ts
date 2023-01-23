import styled from 'styled-components';

export const FormAnnotation = styled.p`
  font-size: 0.875rem;
  color: #6e6b6b;
  margin: 0;

  * + & {
    margin-top: 0.25rem;
  }
`;
