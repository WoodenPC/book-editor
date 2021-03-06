import React, { FC, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { BookPageUrlParams } from './interfaces';
import BooksContext from '../../components/BooksContext';

/** Страница с инфой по книге */
const BookPage: FC = (props) => {
  const { id } = useParams<BookPageUrlParams>();
  const { books, handleUpdateBook } = useContext(BooksContext);

  const book = useMemo(() => {
    return books.find((b) => b.id === id);
  }, [books, id]);

  // todo return book data
  return <div>Book Page</div>;
};

export default BookPage;
