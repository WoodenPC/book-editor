import React, { memo, FC, useCallback } from 'react';

import { BooksListProps } from './interfaces';
import { BooksListStyled } from './styles';
import BooksListItem from './components/BooksListItem';
import { useHistory } from 'react-router-dom';
import { Book } from '../../interfaces';
import { FiltersWrapperStyled } from './styles';
import Button from '../../ui/Button';
import { getButtonSortSuffix } from './utils/getButtonSortSuffix';

/** список книг */
const BooksList: FC<BooksListProps> = (props) => {
  const { books, onRemoveBook, onSortByTitle, onSortByPublicationYear, sortingRules } = props;
  const { push } = useHistory();
  const handleEditBook = useCallback(
    (book: Book) => {
      push(`/book/${book.id}`);
    },
    [push],
  );

  if (!books || books.length === 0) {
    return null;
  }
  return (
    <BooksListStyled>
      <FiltersWrapperStyled>
        <Button text={`Сортировать по названию ${getButtonSortSuffix(sortingRules.byTitle)}`} onClick={onSortByTitle} />
        <Button
          text={`Сортировать по дате публикации ${getButtonSortSuffix(sortingRules.byPublicationYear)}`}
          onClick={onSortByPublicationYear}
        />
      </FiltersWrapperStyled>
      {books.map((book) => (
        <BooksListItem book={book} key={book.id} onRemoveBook={onRemoveBook} onEditBook={handleEditBook} />
      ))}
    </BooksListStyled>
  );
};

export default memo(BooksList);
