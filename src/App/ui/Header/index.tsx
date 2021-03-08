import React, { memo, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Button from '../Button';

import { HeaderStyled, LinkStyled } from './styles';

/** шапка приложения */
const Header = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const handleGoToNewBookPage = useCallback(() => {
    push('/createBook');
  }, [push]);

  return (
    <HeaderStyled>
      <div>
        <LinkStyled to="/" text="Список книг" />
      </div>
      {pathname !== '/createBook' && (
        <div>
          <Button onClick={handleGoToNewBookPage} text="Добавить книгу" appearance="primary" />
        </div>
      )}
    </HeaderStyled>
  );
};

export default memo(Header);
