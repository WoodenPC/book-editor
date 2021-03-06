import styled from 'styled-components';

export const BooksListItemStyled = styled.li`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }

  border: 1px solid ${({ theme }) => theme.colors.grey4};
`;
