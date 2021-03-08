import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { format, isValid } from 'date-fns';

import BooksContext from '../../BooksContext';
import { Author, Book } from '../../interfaces';
import Button from '../../ui/Button';

import { BookPageUrlParams, FieldsValidationData } from './interfaces';
import { validateBookData } from './utils/validateBookData';
import { getDefaultFieldsValidationData } from './utils/getDefaultFieldsValidationData';
import { checkIfAllFieldsAreValid } from './utils/checkIfAllFieldsAreValid';
import AuthorsField from './Fields/AuthorsField';
import SimpleField from './Fields/SimpleField';
import ImageField from './Fields/ImageField';
import { BottomMenuWrapperStyled, FormStyled, FieldsWrapper } from './styles';
import { PUBLISHER_FIELD_ATTRIBUTES, TITLE_FIELD_ATTRIBUTES } from './constants';
import { parseDateFromString } from './utils/parseDateFromString';

/** Страница с инфой по книге */
const BookPage: FC = () => {
  const { id } = useParams<BookPageUrlParams>();
  const { push, goBack, replace } = useHistory();
  const { books, handleUpdateBook, handleAddBook, handleRemoveBook } = useContext(BooksContext);

  const [isDirty, setIsDirty] = useState(false);
  const [fieldsValidationData, setFieldsValidationData] = useState<FieldsValidationData>(
    getDefaultFieldsValidationData(),
  );

  useEffect(() => {
    if (id && !books.find((b) => b.id === id)) {
      replace('/');
    }
  }, [id, books, replace]);

  const foundBook = useMemo<Book>(
    () =>
      books.find((b) => b.id === id) || {
        title: '',
        authors: [],
        pagesCount: 0,
        id: uuid(),
      },
    [id, books],
  );

  useEffect(() => {
    setBookTitle(foundBook.title);
    setBookAuthors(foundBook.authors);
    setBookPageCount(foundBook.pagesCount);
    setBookPublisher(foundBook.publisher);
    const ua = navigator.userAgent.toLowerCase();
    console.log(ua);
    if (ua.includes('safari') && !ua.includes('chrome')) {
      /** для safari выполняем преобразование формата даты */
      const parsedDate = parseDateFromString(foundBook.releaseDate);
      if (isValid(parsedDate)) {
        const dateStr: string = format(parsedDate, 'dd.MM.yyyy');
        setBookReleaseDate(dateStr);
      }
    } else {
      setBookReleaseDate(foundBook.releaseDate);
    }

    setBookPublicationYear(foundBook.publicationYear);
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
      id: foundBook.id,
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
    let isValidData = checkIfAllFieldsAreValid(fieldsValidationData);
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
    const fieldsValidationData = validateBookData(bookData);
    setFieldsValidationData(fieldsValidationData);
    let isValidData = checkIfAllFieldsAreValid(fieldsValidationData);
    if (isValidData) {
      handleUpdateBook(bookData);
      setIsDirty(false);
      alert('Успешно сохранено');
    }
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
    setBookPageCount(Math.round(+event.target.value));
    setIsDirty(true);
  }, []);

  const handleChangePublisher = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookPublisher(event.target.value);
    setIsDirty(true);
  }, []);

  const handleChangePublicationYear = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBookPublicationYear(Math.round(+event.target.value));
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
            label="Заголовок книги (не более 30 символов)"
            value={bookTitle}
            onChange={handleChangeTitle}
            isRequired
            placeholder="Заголовок"
            validationStatus={fieldsValidationData.title.status}
            validationMessage={fieldsValidationData.title.message}
            inputAttributes={TITLE_FIELD_ATTRIBUTES}
          />
          <AuthorsField
            authors={bookAuthors}
            onChange={handleChangeAuthors}
            validationStatus={fieldsValidationData.authors.status}
            validationMessage={fieldsValidationData.authors.message}
          />
          <SimpleField
            label="Количество страниц (больше 0 и не более 10000)"
            onChange={handleChangePagesCount}
            value={bookPageCount}
            isRequired
            type="number"
            placeholder="5"
            validationStatus={fieldsValidationData.pageCount.status}
            validationMessage={fieldsValidationData.pageCount.message}
          />
          <SimpleField
            label="Название издательства (не более 30 символов)"
            value={bookPublisher}
            onChange={handleChangePublisher}
            validationMessage={fieldsValidationData.publisher.message}
            validationStatus={fieldsValidationData.publisher.status}
            inputAttributes={PUBLISHER_FIELD_ATTRIBUTES}
          />
          <SimpleField
            label="Год публикации (не раньше 1800)"
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
            label="Дата выхода в тираж (не раньше 01.01.1800)"
            value={bookReleaseDate}
            type="date"
            onChange={handleChangeReleaseDate}
            placeholder="01.01.1800"
            validationMessage={fieldsValidationData.releaseDate.message}
            validationStatus={fieldsValidationData.releaseDate.status}
          />
        </FieldsWrapper>
      </FormStyled>
      {!id ? (
        <BottomMenuWrapperStyled>
          <Button onClick={handleAddBookToStorage} appearance="primary" text="Добавить книгу" />
          <Button onClick={handleCancel} text="Отмена" />
        </BottomMenuWrapperStyled>
      ) : (
        <BottomMenuWrapperStyled>
          {isDirty && <Button text="Сохранить изменения" appearance="primary" onClick={handleUpdateBookInStorage} />}
          <Button text="Удалить книгу" onClick={handleRemoveBookFromStorage} />
        </BottomMenuWrapperStyled>
      )}
    </div>
  );
};

export default BookPage;
