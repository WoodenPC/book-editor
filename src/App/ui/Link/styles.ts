import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grey9};

  &:hover {
    color: ${({ theme }) => theme.colors.grey11};
  }
`;
