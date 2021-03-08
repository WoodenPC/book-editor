import styled from 'styled-components';

import Link from '../Link';

export const HeaderStyled = styled.div`
  padding: 8px 0 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LinkStyled = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;
