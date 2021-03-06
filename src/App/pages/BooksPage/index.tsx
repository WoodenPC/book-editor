import React, { FC, useContext } from 'react';

import BooksList from '../../components/BooksList';
import BooksContext from '../../components/BooksContext';

/** страница со списком книг */
const BooksPage: FC = (props) => {
  const { books, handleRemoveBook } = useContext(BooksContext);
  return (
    <div>
      <div>
        <button>Сортировать по названию</button>
        <button>Сортировать по дате публикации</button>
      </div>
      <BooksList books={books} onRemoveBook={handleRemoveBook} />
    </div>
  );
};

export default BooksPage;
