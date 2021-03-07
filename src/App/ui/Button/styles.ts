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
        background-color: ${colors.green1};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.green2};
        }
      `;
    }
    return css`
      color: ${colors.grey11};
      background-color: ${colors.grey4};
      &:hover {
        background-color: ${colors.grey6};
      }
    `;
  }}

  ${({ $variant = 'default', theme }) => {
    const { colors } = theme;
    if ($variant === 'outlined') {
      return css`
        border: 1px solid ${colors.grey8};
      `;
    }

    if ($variant === 'contained') {
      return css`
        background-color: ${colors.white};
        color: ${colors.grey11};
      `;
    }
  }}
`;
