import React, { memo, FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Book } from '../../interfaces';
import Button from '../../ui/Button';

import { BooksListProps } from './interfaces';
import { BooksListStyled } from './styles';
import BooksListItem from './components/BooksListItem';
import { FiltersWrapperStyled, BooksListWrapperStyled } from './styles';
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
    <BooksListWrapperStyled>
      <FiltersWrapperStyled>
        <Button text={`Сортировать по названию ${getButtonSortSuffix(sortingRules.byTitle)}`} onClick={onSortByTitle} />
        <Button
          text={`Сортировать по дате публикации ${getButtonSortSuffix(sortingRules.byPublicationYear)}`}
          onClick={onSortByPublicationYear}
        />
      </FiltersWrapperStyled>
      <BooksListStyled>
        {books.map((book) => (
          <BooksListItem book={book} key={book.id} onRemoveBook={onRemoveBook} onEditBook={handleEditBook} />
        ))}
      </BooksListStyled>
    </BooksListWrapperStyled>
  );
};

export default memo(BooksList);
