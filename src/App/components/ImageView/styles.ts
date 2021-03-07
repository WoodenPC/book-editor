import styled from 'styled-components';
import { ImageNotFoundStyledWrapperProps } from './interfaces';

export const ImageNotFoundStyledWrapper = styled.div<ImageNotFoundStyledWrapperProps>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey1};
`;
