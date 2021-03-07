import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderStyled } from './styles';

import Link from '../Link';
import Button from '../Button';

/** шапка приложения */
const Header = () => {
  const { push } = useHistory();

  const handleGoToNewBookPage = useCallback(() => {
    push('/createBook');
  }, [push]);

  return (
    <HeaderStyled>
      <div>
        <Link to="/" text="Редактор книг" />
      </div>
      <div>
        <Button onClick={handleGoToNewBookPage} text="Добавить книгу" appearance="primary" />
      </div>
    </HeaderStyled>
  );
};

export default memo(Header);
