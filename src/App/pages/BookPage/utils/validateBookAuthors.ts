import { ValidationData } from '../interfaces';
import { Author } from '../../../interfaces';

/** валидация авторов книги */
export function validateBookAuthors(authors: Author[]): ValidationData {
  if (authors.length === 0) {
    return {
      status: false,
      message: 'Книга должна содержать хотя бы 1 автора',
    };
  } else {
    if (authors.some((author) => author.name.length === 0 && author.surname.length === 0)) {
      return {
        status: false,
        message: 'Имя и фамилия авторов должны быть заполнены',
      };
    }
  }

  return {
    status: true,
  };
}
