import { Book } from '../../../interfaces';
import { FieldsValidationData } from '../interfaces';
import { getDefaultFieldsValidationData } from './getDefaultFieldsValidationData';

/** валидация данных книги */
export function validateBookData(book: Book): FieldsValidationData {
  const result = getDefaultFieldsValidationData();

  if (book.title.length === 0) {
    result.title = {
      status: false,
      message: 'Название книги не введено',
    };
  } else if (book.title.length > 30) {
    result.title = {
      status: false,
      message: 'Длина названия книги не должна превышать 30 символов',
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

  return result;
}
