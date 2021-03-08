import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import BooksContext from '../../BooksContext';
import { Author, Book } from '../../interfaces';
import Button from '../../ui/Button';

import { BookPageUrlParams, FieldsValidationData } from './interfaces';
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

  const foundBook = useMemo<Book>(
    () =>
      books.find((b) => b.id === id) || {
        title: '',
        authors: [],
        pagesCount: 0,
        id: '',
      },
    [id, books],
  );

  useEffect(() => {
    setBookTitle(foundBook.title);
    setBookAuthors(foundBook.authors);
    setBookPageCount(foundBook.pagesCount);
    setBookPublisher(foundBook.publisher);
    setBookPublicationYear(foundBook.publicationYear);
    setBookReleaseDate(foundBook.releaseDate);
    setBookIsbn(foundBook.isbn);
    setBookImage(foundBook.image);
  }, [foundBook]);

  const [bookTitle, setBookTitle] = useState(foundBook.title);
  const [bookAuthors, setBookAuthors] = useState<Author[]>(foundBook.authors);
  const [bookPageCount, setBookPageCount] = useState<number | undefined>(foundBook.pagesCount);
  const [bookPublisher, setBookPublisher] = useState<string | undefined>(foundBook.publisher);
  const [bookPublicationYear, setBookPublicationYear] = useState<number | undefined>(foundBook.publicationYear);
  const [bookReleaseDate, setBookReleaseDate] = useState<string | undefined>(foundBook.releaseDate);
  const [bookIsbn, setBookIsbn] = useState<string | undefined>(foundBook.isbn);
  const [bookImage, setBookImage] = useState<string | undefined>(foundBook.image);

  const getBookData = (): Book => {
    return {
      id: uuid(),
      title: bookTitle,
      authors: bookAuthors,
      pagesCount: bookPageCount || 0,
      publisher: bookPublisher,
      publicationYear: bookPublicationYear,
      releaseDate: bookReleaseDate,
      isbn: bookIsbn,
      image: bookImage,
    };
  };

  const handleAddBookToStorage = () => {
    const bookData = getBookData();
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
  };

  const handleRemoveBookFromStorage = () => {
    const bookData = getBookData();
    handleRemoveBook(bookData);
    replace('/');
  };

  const handleUpdateBookInStorage = () => {
    const bookData = getBookData();
    handleUpdateBook(bookData);
    setIsDirty(false);
  };

  const handleCancel = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.target.value);
    setIsDirty(true);
  }, []);

  const handleChangeAuthors = useCallback((authors: Author[]) => {
    setBookAuthors(authors);
    setIsDirty(true);
  }, []);

  const handleChangePagesCount = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookPageCount(+event.target.value);
    setIsDirty(true);
  }, []);

  const handleChangePublisher = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookPublisher(event.target.value);
    setIsDirty(true);
  }, []);

  const handleChangePublicationYear = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookPublicationYear(+event.target.value);
    setIsDirty(true);
  }, []);

  const handleChangeIsbn = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookIsbn(event.target.value);
    setIsDirty(true);
  }, []);

  const handleChangeImage = useCallback((imageUrl?: string) => {
    setBookImage(imageUrl);
    setIsDirty(true);
  }, []);

  const handleChangeReleaseDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookReleaseDate(event.target.value);
    setIsDirty(true);
  }, []);

  return (
    <div>
      <h2>{!id ? 'Добавить новую книгу' : 'Редактировать данные о книге'}</h2>
      <FormStyled description={!id ? 'Заполните поля для добавления новой книги' : undefined}>
        <ImageField imageUrl={bookImage} onChange={handleChangeImage} />
        <FieldsWrapper>
          <SimpleField
            label="Заголовок книги"
            value={bookTitle}
            onChange={handleChangeTitle}
            isRequired
            placeholder="Заголовок"
            validationStatus={fieldsValidationData.title.status}
            validationMessage={fieldsValidationData.title.message}
          />
          <AuthorsField
            authors={bookAuthors}
            onChange={handleChangeAuthors}
            validationStatus={fieldsValidationData.authors.status}
            validationMessage={fieldsValidationData.authors.message}
          />
          <SimpleField
            label="Количество страниц"
            onChange={handleChangePagesCount}
            value={bookPageCount}
            isRequired
            type="number"
            placeholder="0"
            validationStatus={fieldsValidationData.pageCount.status}
            validationMessage={fieldsValidationData.pageCount.message}
          />
          <SimpleField
            label="Название издательства"
            value={bookPublisher}
            onChange={handleChangePublisher}
            validationMessage={fieldsValidationData.publisher.message}
            validationStatus={fieldsValidationData.publisher.status}
          />
          <SimpleField
            label="Год публикации"
            value={bookPublicationYear}
            onChange={handleChangePublicationYear}
            type="number"
            width="100px"
            placeholder="1800"
            validationMessage={fieldsValidationData.publicationYear.message}
            validationStatus={fieldsValidationData.publicationYear.status}
          />
          <SimpleField
            label="ISBN"
            value={bookIsbn}
            onChange={handleChangeIsbn}
            placeholder="978-3-16-148410-0"
            validationMessage={fieldsValidationData.isbn.message}
            validationStatus={fieldsValidationData.isbn.status}
          />
          <SimpleField
            label="Дата выхода в тираж"
            value={bookReleaseDate}
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
