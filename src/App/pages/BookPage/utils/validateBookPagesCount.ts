import { ValidationData } from '../interfaces';

/** валидация страниц книги */
export function validateBookPagesCount(pagesCount = 0): ValidationData {
  if (pagesCount < 1 || pagesCount > 10000) {
    return {
      status: false,
      message: 'Количество страниц книги должно быть больше 0 и меньше 10000',
    };
  }

  return {
    status: true,
  };
}
