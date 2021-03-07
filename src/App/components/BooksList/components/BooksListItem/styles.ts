import styled, { css } from 'styled-components';

export const BooksListItemStyled = styled.li`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 8px;
  margin-bottom: 18px;
  list-style: none;
  border-radius: 4px;
  padding: 12px;
  &:last-child {
    margin-bottom: 0;
  }

  border: 2px solid ${({ theme }) => theme.colors.grey6};
`;

export const ButtonsWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  grid-gap: 4px;
`;

export const BooksListItemContentStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
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
