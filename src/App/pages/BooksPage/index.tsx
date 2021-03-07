import React, { FC, useContext } from 'react';

import BooksList from '../../widgets/BooksList';
import BooksContext from '../../BooksContext';

/** страница со списком книг */
const BooksPage: FC = () => {
  const { books, handleRemoveBook, handleSortByTitle, handleSortByPublicationYear, sortingRules } = useContext(
    BooksContext,
  );
  return (
    <div>
      {books.length > 0 ? (
        <BooksList
          books={books}
          onRemoveBook={handleRemoveBook}
          sortingRules={sortingRules}
          onSortByTitle={handleSortByTitle}
          onSortByPublicationYear={handleSortByPublicationYear}
        />
      ) : (
        <h2>Список книг пуст.</h2>
      )}
    </div>
  );
};

export default BooksPage;
