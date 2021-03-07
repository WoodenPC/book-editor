import React, { memo, FC, useCallback, useMemo } from 'react';

import { BooksListItemProps } from './interfaces';
import { BooksListItemStyled, ButtonsWrapperStyled, BooksListItemContentStyled } from './styles';
import Button from '../../../Button';

/** элемент списка книг */
const BooksListItem: FC<BooksListItemProps> = ({ book, onRemoveBook, onEditBook }) => {
  const handleRemoveBook = useCallback(() => {
    onRemoveBook(book);
  }, [onRemoveBook, book]);

  const handleEditBook = useCallback(() => {
    onEditBook(book);
  }, [book, onEditBook]);

  const { title, releaseDate, isbn, pagesCount, publicationYear, publisher, image, authors } = book;
  const authorsInfo = useMemo(() => {
    return authors.map((author) => `${author.surname} ${author.name}`).join(' ● ');
  }, [authors]);
  return (
    <BooksListItemStyled>
      <BooksListItemContentStyled>
        <div>
          <img src={image} alt="Изображение книги" width={200} height={200} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>Авторы: {authorsInfo}</p>
          {publisher && <p>Издатель: {publisher}</p>}
          {publicationYear && <p>Год публикации: {publicationYear}</p>}
          {releaseDate && <p>Дата выхода в тираж: {releaseDate}</p>}
          <p>Кол-во страниц: {pagesCount}</p>
          {isbn && <p>ISBN: {isbn}</p>}
        </div>
      </BooksListItemContentStyled>
      <ButtonsWrapperStyled>
        <Button onClick={handleEditBook} text="Редактировать" />
        <Button onClick={handleRemoveBook} text="Удалить" />
      </ButtonsWrapperStyled>
    </BooksListItemStyled>
  );
};

export default memo(BooksListItem);
