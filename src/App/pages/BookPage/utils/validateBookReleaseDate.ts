import { isValid } from 'date-fns';

import { ValidationData } from '../interfaces';

import { parseDateFromString } from './parseDateFromString';

/** валидация даты выхода в тираж книги */
export function validateBookReleaseDate(releaseDate?: string): ValidationData {
  if (releaseDate) {
    let date = parseDateFromString(releaseDate);
    if (!isValid(date) || date.getTime() < new Date('1800-01-01').getTime()) {
      return {
        status: false,
        message: 'Некорректная дата. Дата выхода в тираж должна быть позже 01.01.1800',
      };
    }
  }

  return {
    status: true,
  };
}
