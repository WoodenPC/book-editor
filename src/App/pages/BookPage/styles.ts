import styled, { css } from 'styled-components';

import Form from '../../ui/Form';

export const BottomMenuWrapperStyled = styled.div`
  display: grid;
  justify-content: right;
  grid-template-columns: auto auto;
  width: 100%;
  grid-gap: 8px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
  `}
`;

export const FormStyled = styled(Form)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const FieldsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill);
  grid-gap: 8px;
`;
