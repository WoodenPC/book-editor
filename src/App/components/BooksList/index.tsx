import React, { memo, FC } from 'react';

import { BooksListProps } from './interfaces';
import { BooksListStyled } from './styles';
import BooksListItem from './components/BooksListItem';

/** список книг */
const BooksList: FC<BooksListProps> = ({ books, onRemoveBook }) => {
  return (
    <BooksListStyled>
      {books.map((book) => (
        <BooksListItem book={book} key={book.id} onRemoveBook={onRemoveBook} />
      ))}
    </BooksListStyled>
  );
};

export default memo(BooksList);
