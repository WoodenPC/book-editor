import { ValidationData } from '../interfaces';
import { ISBN_REGEX } from '../constants';

/** валидация isbn книги */
export function validateBookIsbn(isbn?: string): ValidationData {
  if (isbn && !ISBN_REGEX.test(isbn)) {
    return {
      status: false,
      message: 'Некорректный ISBN',
    };
  }

  return {
    status: true,
  };
}
