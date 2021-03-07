import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 4px 6px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grey10};
`;
