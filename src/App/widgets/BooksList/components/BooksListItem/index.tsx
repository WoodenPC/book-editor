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
      <BookTitleStyled>{title}</BookTitleStyled>
      <BooksListItemContentStyled>
        <div>
          <ImageView src={image} alt="Изображение книги" width={160} height={200} />
        </div>
        <BookContentInfoStyled>
          <p>
            <b>Авторы:</b> {authorsInfo}
          </p>
          {publisher && (
            <p>
              <b>Издатель:</b> {publisher}
            </p>
          )}
          {publicationYear && (
            <p>
              <b>Год публикации:</b> {publicationYear}
            </p>
          )}
          {releaseDate && (
            <p>
              <b>Дата выхода в тираж:</b> {format(new Date(releaseDate), 'dd.MM.yyyy')}
            </p>
          )}
          <p>
            <b>Кол-во страниц:</b> {pagesCount}
          </p>
          {isbn && (
            <p>
              <b>ISBN:</b> {isbn}
            </p>
          )}
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
