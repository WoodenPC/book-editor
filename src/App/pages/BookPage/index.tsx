import React, { ChangeEvent, FC, useCallback, useContext, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { BookPageUrlParams, FieldsValidationData } from './interfaces';
import BooksContext from '../../BooksContext';
import { Author, Book } from '../../interfaces';
import Button from '../../ui/Button';

import { validateBookData } from './utils/validateBookData';
import { getDefaultFieldsValidationData } from './utils/getDefaultFieldsValidationData';

import AuthorsField from './Fields/AuthorsField';
import SimpleField from './Fields/SimpleField';
import ImageField from './Fields/ImageField';

import { BottomMenuWrapperStyled, FormStyled, FieldsWrapper } from './styles';

/** Страница с инфой по книге */
const BookPage: FC = () => {
  const { id } = useParams<BookPageUrlParams>();
  const { push, goBack, replace } = useHistory();
  const { books, handleUpdateBook, handleAddBook, handleRemoveBook } = useContext(BooksContext);

  const [isDirty, setIsDirty] = useState(false);
  const [fieldsValidationData, setFieldsValidationData] = useState<FieldsValidationData>(
    getDefaultFieldsValidationData(),
  );
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
    const fieldsValidationData = validateBookData(bookData);
    setFieldsValidationData(fieldsValidationData);
    let isValidData = true;
    Object.keys(fieldsValidationData).forEach((key) => {
      isValidData = isValidData && fieldsValidationData[key].status;
    });
    if (isValidData) {
      handleAddBook(bookData);
      push(`/`);
    }
  }, [handleAddBook, bookData, push]);

  const handleRemoveBookFromStorage = useCallback(() => {
    handleRemoveBook(bookData);
    replace('/');
  }, [bookData, replace]);

  const handleUpdateBookInStorage = useCallback(() => {
    handleUpdateBook(bookData);
    setIsDirty(false);
  }, [bookData]);

  const handleCancel = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, title: event.target.value }));
    setIsDirty(true);
  }, []);

  const handleChangeAuthors = useCallback((authors: Author[]) => {
    setBookData((prevBookData) => ({ ...prevBookData, authors }));
    setIsDirty(true);
  }, []);

  const handleChangePagesCount = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, pagesCount: +event.target.value }));
    setIsDirty(true);
  }, []);

  const handleChangePublisher = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, publisher: event.target.value }));
    setIsDirty(true);
  }, []);

  const handleChangePublicationYear = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, publicationYear: +event.target.value }));
    setIsDirty(true);
  }, []);

  const handleChangeIsbn = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, isbn: event.target.value }));
    setIsDirty(true);
  }, []);

  const handleChangeImage = useCallback((imageUrl?: string) => {
    setBookData((prevBookData) => ({ ...prevBookData, image: imageUrl }));
    setIsDirty(true);
  }, []);

  const handleChangeReleaseDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookData((prevBookData) => ({ ...prevBookData, releaseDate: event.target.value }));
    setIsDirty(true);
  }, []);

  return (
    <div>
      <h2>{!id ? 'Добавить новую книгу' : 'Редактировать данные о книге'}</h2>
      <FormStyled description={!id ? 'Заполните поля для добавления новой книги' : undefined}>
        <ImageField imageUrl={bookData.image} onChange={handleChangeImage} />
        <FieldsWrapper>
          <SimpleField
            label="Заголовок книги"
            defaultValue={bookData.title}
            onChange={handleChangeTitle}
            isRequired
            placeholder="Заголовок"
            validationStatus={fieldsValidationData.title.status}
            validationMessage={fieldsValidationData.title.message}
          />
          <AuthorsField
            authors={bookData.authors}
            onChange={handleChangeAuthors}
            validationStatus={fieldsValidationData.authors.status}
            validationMessage={fieldsValidationData.authors.message}
          />
          <SimpleField
            label="Количество страниц"
            onChange={handleChangePagesCount}
            isRequired
            placeholder="0"
            validationStatus={fieldsValidationData.pageCount.status}
            validationMessage={fieldsValidationData.pageCount.message}
          />
          <SimpleField
            label="Название издательства"
            defaultValue={bookData.publisher}
            onChange={handleChangePublisher}
            validationMessage={fieldsValidationData.publisher.message}
            validationStatus={fieldsValidationData.publisher.status}
          />
          <SimpleField
            label="Год публикации"
            defaultValue={bookData.publicationYear}
            onChange={handleChangePublicationYear}
            type="number"
            width="100px"
            placeholder="1800"
            validationMessage={fieldsValidationData.publicationYear.message}
            validationStatus={fieldsValidationData.publicationYear.status}
          />
          <SimpleField
            label="ISBN"
            defaultValue={bookData.isbn}
            onChange={handleChangeIsbn}
            placeholder="978-3-16-148410-0"
            validationMessage={fieldsValidationData.isbn.message}
            validationStatus={fieldsValidationData.isbn.status}
          />
          <SimpleField
            label="Дата выхода в тираж"
            defaultValue={bookData.releaseDate}
            type="date"
            onChange={handleChangeReleaseDate}
            validationMessage={fieldsValidationData.releaseDate.message}
            validationStatus={fieldsValidationData.releaseDate.status}
          />
        </FieldsWrapper>
      </FormStyled>
      {!id ? (
        <BottomMenuWrapperStyled>
          <Button onClick={handleCancel} text="Отмена" />
          <Button onClick={handleAddBookToStorage} appearance="primary" text="Добавить книгу" />
        </BottomMenuWrapperStyled>
      ) : (
        <BottomMenuWrapperStyled>
          <Button text="Удалить книгу" onClick={handleRemoveBookFromStorage} />
          {isDirty && <Button text="Сохранить изменения" appearance="primary" onClick={handleUpdateBookInStorage} />}
        </BottomMenuWrapperStyled>
      )}
    </div>
  );
};

export default BookPage;
