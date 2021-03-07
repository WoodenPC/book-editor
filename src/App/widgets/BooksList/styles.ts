import styled, { css } from 'styled-components';

export const BooksListStyled = styled.ul`
  padding: 6px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey2};
`;

export const FiltersWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
  grid-gap: 4px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `}
`;
