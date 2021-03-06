import React, { memo } from 'react';
import { HeaderStyled } from './styles';

import Link from '../Link';

/** шапка приложения */
const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <Link to="/" text="Редактор книг" />
      </div>
      <div>
        <Link to="/createBook" text="Добавить" />
      </div>
    </HeaderStyled>
  );
};

export default memo(Header);
