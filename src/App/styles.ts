import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Calibri, sans-serif;
  }
`;

export const AppLayout = styled.div`
  ${({ theme }) => css`
    max-width: 1024px;
    margin: 0 auto;

    @media screen and (max-width: ${theme.breakpoints.desktop}) {
      width: 100%;
      padding: 0 20px;
    }
  `}
`;
