import styled from 'styled-components';
export const TextField = styled.input<{ width?: 'normal' | 'tel' }>`
  background: #fff;
  border: 1px solid #8c8989;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  height: 3rem;
  width: ${({ width }) => (width == 'tel' ? '4rem' : '20rem')};
  font-size: 1rem;
  max-width: 100%;
`;
TextField.defaultProps = {
  type: 'text',
};
