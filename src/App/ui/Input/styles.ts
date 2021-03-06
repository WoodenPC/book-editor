import styled from 'styled-components';

import { InputWrapperStyledProps } from './interfaces';

export const InputStyled = styled.input`
  text-decoration: none;
  border: none;
  background: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey7};
  }
`;

export const InputWrapperStyled = styled.div<InputWrapperStyledProps>`
  border: ${({ theme }) => `2px solid ${theme.colors.grey8}`};
  border-radius: 4px;
  padding: 4px 6px;
  width: ${({ $width }) => $width};
`;
