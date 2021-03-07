import React, { memo, FC, useCallback, useMemo } from 'react';
import { format } from 'date-fns';

import ImageView from '../../../../ui/ImageView';
import Button from '../../../../ui/Button';

import { BooksListItemProps } from './interfaces';
import {
  BooksListItemStyled,
  ButtonsWrapperStyled,
  BooksListItemContentStyled,
  BookContentInfoStyled,
  BookTitleStyled,
  BooksListItemContentWrapperStyled,
} from './styles';

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
          <ImageView src={image} alt="Изображение книги" width={160} height={200} />
        </div>
        <BookContentInfoStyled>
          <BookTitleStyled>{title}</BookTitleStyled>
          <br />
          <p>Авторы: {authorsInfo}</p>
          {publisher && <p>Издатель: {publisher}</p>}
          {publicationYear && <p>Год публикации: {publicationYear}</p>}
          {releaseDate && <p>Дата выхода в тираж: {format(new Date(releaseDate), 'dd.MM.yyyy')}</p>}
          <p>Кол-во страниц: {pagesCount}</p>
          {isbn && <p>ISBN: {isbn}</p>}
        </BookContentInfoStyled>
      </BooksListItemContentStyled>
      <ButtonsWrapperStyled>
        <Button onClick={handleRemoveBook} text="Удалить" />
        <Button onClick={handleEditBook} text="Редактировать" appearance="primary" />
      </ButtonsWrapperStyled>
    </BooksListItemStyled>
  );
};

export default memo(BooksListItem);
