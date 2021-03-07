import React, { FC, useContext } from 'react';

import BooksList from '../../components/BooksList';
import BooksContext from '../../components/BooksContext';
import Button from '../../components/Button';

import { FiltersWrapperStyled } from './styles';

/** страница со списком книг */
const BooksPage: FC = () => {
  const { books, handleRemoveBook, handleSortByTitle, handleSortByPublicationYear } = useContext(BooksContext);
  console.log(books);
  return (
    <div>
      <FiltersWrapperStyled>
        <Button text="Сортировать по названию" onClick={handleSortByTitle} />
        <Button text="Сортировать по дате публикации" onClick={handleSortByPublicationYear} />
      </FiltersWrapperStyled>
      <BooksList books={books} onRemoveBook={handleRemoveBook} />
    </div>
  );
};

export default BooksPage;
