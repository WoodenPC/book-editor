import React, { memo, FC, useCallback } from 'react';

import { BooksListItemProps } from './interfaces';
import { BooksListItemStyled } from './styles';
import Button from '../../../Button';

/** элемент списка книг */
const BooksListItem: FC<BooksListItemProps> = ({ book, onRemoveBook }) => {
  const handleRemoveBook = useCallback(() => {
    onRemoveBook(book);
  }, [onRemoveBook, book]);

  return (
    <BooksListItemStyled>
      <div>{book.title}</div>
      <Button onClick={handleRemoveBook} />
    </BooksListItemStyled>
  );
};

export default memo(BooksListItem);
