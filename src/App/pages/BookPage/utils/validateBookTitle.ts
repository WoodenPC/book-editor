import { ValidationData } from '../interfaces';

/** валидация заголовка книги */
export function validateBookTitle(title = ''): ValidationData {
  if (title.length === 0) {
    return {
      status: false,
      message: 'Заголовок книги не введен',
    };
  } else if (title.length > 30) {
    return {
      status: false,
      message: 'Длина заголовка книги не должна превышать 30 символов',
    };
  }

  return {
    status: true,
  };
}
