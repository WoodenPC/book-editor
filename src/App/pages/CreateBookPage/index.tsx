import React, { useContext } from 'react';
import BooksContext from '../../components/BooksContext';

const CreateBookPage = () => {
  const { handleAddBook } = useContext(BooksContext);
  return <div>Create Book Page</div>;
};

export default CreateBookPage;
