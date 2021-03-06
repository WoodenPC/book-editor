import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const AppLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
