import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Calibri, sans-serif;
  }
`;

export const AppLayout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
