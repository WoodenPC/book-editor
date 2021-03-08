import { ValidationData } from '../interfaces';

/** валидация года публикации книги */
export function validateBookPublicationYear(publicationYear?: number): ValidationData {
  if (publicationYear && publicationYear < 1800) {
    return {
      status: false,
      message: 'Год публикации должен быть позже 1800 года',
    };
  }

  return {
    status: true,
  };
}
