import styled from 'styled-components';

export const HeaderStyled = styled.div`
  position: sticky;
  padding: 8px 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
`;
