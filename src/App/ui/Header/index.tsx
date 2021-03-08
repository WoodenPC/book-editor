import React, { memo, useCallback, FC } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';

import { HeaderStyled, LinkStyled } from './styles';
import { HeaderProps } from './interfaces';

/** шапка приложения */
const Header: FC<HeaderProps> = (props) => {
  const { shouldDisplayAddNewBookButton } = props;
  const { push } = useHistory();

  const handleGoToNewBookPage = useCallback(() => {
    push('/createBook');
  }, [push]);

  return (
    <HeaderStyled>
      <div>
        <LinkStyled to="/" text="Список книг" />
      </div>
      {shouldDisplayAddNewBookButton && (
        <div>
          <Button onClick={handleGoToNewBookPage} text="Добавить книгу" appearance="primary" />
        </div>
      )}
    </HeaderStyled>
  );
};

export default memo(Header);
