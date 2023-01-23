import styled from 'styled-components';

export const FormItem = styled.div`
  display: block;

  & + & {
    margin-top: 1rem;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
`;
