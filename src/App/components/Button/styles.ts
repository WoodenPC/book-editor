import styled, { css } from 'styled-components';
import { ButtonStyledProps } from './interfaces';

export const ButtonStyled = styled.button<ButtonStyledProps>`
  outline: none;
  border: none;
  display: inline-block;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  min-height: 30px;
  ${({ $appearance = 'secondary', theme }) => {
    const { colors } = theme;
    if ($appearance === 'primary') {
      return css`
        background-color: ${colors.grey4};
        color: ${colors.black};

        &:hover {
          background-color: ${colors.grey6};
        }
      `;
    }
    return css`
      color: ${colors.grey6};
    `;
  }}

  ${({ $variant = 'default', theme }) => {
    const { colors } = theme;
    if ($variant === 'outlined') {
      return css`
        border: 1px solid ${colors.grey4};
      `;
    }
  }}
`;
