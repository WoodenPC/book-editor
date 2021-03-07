import React, { FC, useContext } from 'react';

import BooksList from '../../components/BooksList';
import BooksContext from '../../components/BooksContext';
import Button from '../../components/Button';

import { FiltersWrapperStyled } from './styles';
import { getButtonSortSuffix } from './utils/getButtonSortSuffix';

/** страница со списком книг */
const BooksPage: FC = () => {
  const { books, handleRemoveBook, handleSortByTitle, handleSortByPublicationYear, sortingRules } = useContext(
    BooksContext,
  );
  return (
    <div>
      <FiltersWrapperStyled>
        <Button
          text={`Сортировать по названию ${getButtonSortSuffix(sortingRules.byTitle)}`}
          onClick={handleSortByTitle}
        />
        <Button
          text={`Сортировать по дате публикации ${getButtonSortSuffix(sortingRules.byPublicationYear)}`}
          onClick={handleSortByPublicationYear}
        />
      </FiltersWrapperStyled>
      <BooksList books={books} onRemoveBook={handleRemoveBook} />
    </div>
  );
};

export default BooksPage;
