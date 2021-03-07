import React, { memo, FC, useCallback } from 'react';

import { BooksListProps } from './interfaces';
import { BooksListStyled } from './styles';
import BooksListItem from './components/BooksListItem';
import { useHistory } from 'react-router-dom';
import { Book } from '../../interfaces';

/** список книг */
const BooksList: FC<BooksListProps> = ({ books, onRemoveBook }) => {
  const { push } = useHistory();
  const handleEditBook = useCallback(
    (book: Book) => {
      push(`/book/${book.id}`);
    },
    [push],
  );
  return (
    <BooksListStyled>
      {books.map((book) => (
        <BooksListItem book={book} key={book.id} onRemoveBook={onRemoveBook} onEditBook={handleEditBook} />
      ))}
    </BooksListStyled>
  );
};

export default memo(BooksList);
