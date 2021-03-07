import React, { ChangeEvent, FC, useCallback, useContext, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { BookPageUrlParams } from './interfaces';
import BooksContext from '../../components/BooksContext';
import { Author, Book } from '../../interfaces';
import Button from '../../components/Button';

import AuthorsField from './Fields/AuthorsField';
import SimpleField from './Fields/SimpleField';
import ImageField from './Fields/ImageField';

import { BottomMenuWrapperStyled, FormStyled, FieldsWrapper } from './styles';

/** Страница с инфой по книге */
const BookPage: FC = () => {
  const { id } = useParams<BookPageUrlParams>();
  const { replace, goBack } = useHistory();
  const { books, handleUpdateBook, handleAddBook } = useContext(BooksContext);

  const [bookData, setBookData] = useState<Book>(() => {
    const defaultBookData = {
      title: '',
      authors: [],
      pagesCount: 0,
      id: uuid(),
    };

    if (!id) {
      /** если нет id возвращаем дефолтный набор данных */
      return defaultBookData;
    }

    const foundBook = books.find((b) => b.id === id);
    if (!foundBook) {
      replace('/');
    }
    return foundBook || defaultBookData;
  });

  const handleAddBookToStorage = useCallback(() => {
    handleAddBook(bookData);
    replace(`/book/${bookData.id}`);
  }, [handleAddBook, bookData, replace]);

  const handleCancel = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, title: event.target.value }));
  }, []);

  const handleChangeAuthors = useCallback((authors: Author[]) => {
    setBookData((prevBookData) => ({ ...prevBookData, authors }));
  }, []);

  const handleChangePagesCount = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, pagesCount: +event.target.value }));
  }, []);

  const handleChangePublisher = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, publisher: event.target.value }));
  }, []);

  const handleChangePublicationYear = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, publicationYear: +event.target.value }));
  }, []);

  const handleChangeIsbn = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, isbn: event.target.value }));
  }, []);

  const handleChangeImage = useCallback((imageUrl?: string) => {
    setBookData((prevBookData) => ({ ...prevBookData, image: imageUrl }));
  }, []);

  const handleChangeReleaseDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    console.log(typeof event.target.value);
    setBookData((prevBookData) => ({ ...prevBookData, releaseDate: event.target.value }));
  }, []);

  return (
    <div>
      <h2>{!id ? 'Добавить новую книгу' : 'Редактировать данные о книге'}</h2>
      <FormStyled description={!id ? 'Заполните поля для добавления новой книги' : undefined}>
        <ImageField imageUrl={bookData.image} onChange={handleChangeImage} />
        <FieldsWrapper>
          <SimpleField
            label="Название книги"
            value={bookData.title}
            onChange={handleChangeTitle}
            isRequired
            maxLength={30}
          />
          <AuthorsField authors={bookData.authors} onChange={handleChangeAuthors} />
          <SimpleField
            label="Количество страниц"
            value={bookData.pagesCount}
            onChange={handleChangePagesCount}
            isRequired
          />
          <SimpleField label="Название издательства" value={bookData.publisher} onChange={handleChangePublisher} />
          <SimpleField
            label="Год публикации"
            value={bookData.publicationYear}
            onChange={handleChangePublicationYear}
            width="80px"
          />
          <SimpleField label="ISBN" value={bookData.isbn} onChange={handleChangeIsbn} />
          <SimpleField
            label="Дата выхода"
            value={bookData.releaseDate}
            type="date"
            onChange={handleChangeReleaseDate}
          />
        </FieldsWrapper>
      </FormStyled>
      {!id ? (
        <BottomMenuWrapperStyled>
          <Button onClick={handleCancel} text="Отмена" />
          <Button onClick={handleAddBookToStorage} text="Добавить книгу" />
        </BottomMenuWrapperStyled>
      ) : (
        <BottomMenuWrapperStyled>
          <Button onClick={handleCancel} text="Удалить книгу" />
          <Button onClick={handleAddBookToStorage} text="Сохранить изменения" />
        </BottomMenuWrapperStyled>
      )}
    </div>
  );
};

export default BookPage;
