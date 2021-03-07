import styled, { css } from 'styled-components';
import { LabelStyledProps } from './interfaces';

export const LabelStyled = styled.label<LabelStyledProps>`
  ${({ $isRequired, theme }) => {
    if ($isRequired) {
      return css`
        &::after {
          content: '*';
          color: ${theme.colors.red};
          margin-left: 4px;
        }
      `;
    }
  }}
`;
