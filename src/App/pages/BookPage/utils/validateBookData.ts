import { Book } from '../../../interfaces';
import { FieldsValidationData } from '../interfaces';
import { ISBN_REGEX } from '../constants';

import { getDefaultFieldsValidationData } from './getDefaultFieldsValidationData';

/** валидация данных книги */
export function validateBookData(book: Book): FieldsValidationData {
  const result = getDefaultFieldsValidationData();

  if (book.title.length === 0) {
    result.title = {
      status: false,
      message: 'Заголовок книги не введен',
    };
  } else if (book.title.length > 30) {
    result.title = {
      status: false,
      message: 'Длина заголовка книги не должна превышать 30 символов',
    };
  }

  if (book.authors.length === 0) {
    result.authors = {
      status: false,
      message: 'Книга должна содержать хотя бы 1 автора',
    };
  } else {
    if (book.authors.some((author) => author.name.length === 0 && author.surname.length === 0)) {
      result.authors = {
        status: false,
        message: 'Имя и фамилия авторов должны быть заполнены',
      };
    }
  }

  if (book.pagesCount < 1 || book.pagesCount > 10000) {
    result.pageCount = {
      status: false,
      message: 'Количество страниц книги должно быть больше 0 и меньше 10000',
    };
  }

  if (book.publisher && book.publisher.length > 30) {
    result.publisher = {
      status: false,
      message: 'Название издательства не должно превышать 30 символов',
    };
  }

  if (book.publicationYear && book.publicationYear < 1800) {
    result.publicationYear = {
      status: false,
      message: 'Год публикации должен быть позже 1800 года',
    };
  }

  if (book.releaseDate && new Date(book.releaseDate).getTime() < new Date('1800-01-01').getTime()) {
    result.releaseDate = {
      status: false,
      message: 'Дата выхода в тираж должна быть позже 01.01.1800',
    };
  }

  if (book.isbn && !ISBN_REGEX.test(book.isbn)) {
    result.isbn = {
      status: false,
      message: 'Некорректный ISBN',
    };
  }

  return result;
}
