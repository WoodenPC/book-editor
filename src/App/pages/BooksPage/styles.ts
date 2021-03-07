import styled, { css } from 'styled-components';

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
