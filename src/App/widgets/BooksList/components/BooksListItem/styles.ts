import styled, { css } from 'styled-components';

export const BooksListItemStyled = styled.li`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 8px;
  list-style: none;
  border-radius: 4px;
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.green1};
  p {
    word-break: break-word;
  }
`;

export const ButtonsWrapperStyled = styled.div`
  display: grid;
  justify-content: right;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  padding: 6px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `}
`;

export const BooksListItemContentStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 14px;
  padding: 6px 14px;

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
    background-color: ${theme.colors.green1};
    color: ${theme.colors.white};
    min-height: 36px;
    padding: 6px;
  `};
`;
