import styled, { css } from 'styled-components';

export const BooksListStyled = styled.ul`
  overflow: auto;
`;

export const BooksListWrapperStyled = styled.div`
  padding: 6px 0;
`;

export const FiltersWrapperStyled = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  margin-bottom: 10px;
  grid-gap: 4px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `}
`;
