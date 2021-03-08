import React, { FC, useContext, useMemo } from 'react';

import BooksList from '../../widgets/BooksList';
import BooksContext from '../../BooksContext';

/** страница со списком книг */
const BooksPage: FC = () => {
  const {
    books,
    handleRemoveBook,
    handleSortByTitle,
    handleSortByPublicationYear,
    sortingRules,
    handleGetSortedBooks,
  } = useContext(BooksContext);

  const sortedBooks = useMemo(() => {
    return handleGetSortedBooks(books, sortingRules);
  }, [books, sortingRules]);
  return (
    <div>
      {sortedBooks.length > 0 ? (
        <BooksList
          books={sortedBooks}
          onRemoveBook={handleRemoveBook}
          sortingRules={sortingRules}
          onSortByTitle={handleSortByTitle}
          onSortByPublicationYear={handleSortByPublicationYear}
        />
      ) : (
        <h1>Список книг пуст. Пожалуйста, добавьте новую книгу.</h1>
      )}
    </div>
  );
};

export default BooksPage;
