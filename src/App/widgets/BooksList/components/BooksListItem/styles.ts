import styled, { css } from 'styled-components';

export const BooksListItemStyled = styled.li`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 8px;
  list-style: none;
  border-radius: 4px;
  margin-bottom: 6px;
  padding: 6px;
  &:last-child {
    margin-bottom: 0;
  }
  background-color: ${({ theme }) => theme.colors.white};

  p {
    word-break: break-word;
  }
`;

export const ButtonsWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  grid-gap: 4px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `}
`;

export const BooksListItemContentWrapperStyled = styled.div`
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BooksListItemContentStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 14px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      grid-template-rows: auto 1fr;
      grid-template-columns: none;
      justify-items: center;
      text-align: center;
    }
  `}
`;

export const BookContentInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 4px;
`;

export const BookTitleStyled = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxl};
    font-weight: ${theme.fontWeight.bold};
  `};
`;