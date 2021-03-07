import React, { memo, FC } from 'react';

import { LinkProps } from './interfaces';
import { LinkStyled } from './styles';

/** компонент ссылки */
const Link: FC<LinkProps> = (props) => {
  const { to, text, className } = props;
  return (
    <LinkStyled to={to} className={className}>
      {text}
    </LinkStyled>
  );
};

export default memo(Link);
