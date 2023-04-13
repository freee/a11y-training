import styled from 'styled-components';
export const H2 = styled.h2.attrs(()=>({tabIndex: -1}))`
  margin: 0 0 1rem;
  font-size: 2rem;
  font-weight: normal;
  line-height: 1.5;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    right: calc(100% + 0.5rem);
    top: calc(50% - 0.5rem);
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-left: 1rem solid transparent;
    transition: border-color 0.2s;
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    &:before {
      border-left-color: #aac8ff;

    }
  }
`;
