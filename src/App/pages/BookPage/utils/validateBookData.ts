import { format, isValid } from 'date-fns';

import { Book } from '../../../interfaces';
import { FieldsValidationData } from '../interfaces';

import { getDefaultFieldsValidationData } from './getDefaultFieldsValidationData';
import { parseDateFromString } from './parseDateFromString';
import { validateBookTitle } from './validateBookTitle';
import { validateBookAuthors } from './validateBookAuthors';
import { validateBookPagesCount } from './validateBookPagesCount';
import { validateBookPublisher } from './validateBookPublisher';
import { validateBookPublicationYear } from './validateBookPublicationYear';
import { validateBookReleaseDate } from './validateBookReleaseDate';
import { validateBookIsbn } from './validateIsbn';

/** валидация данных книги */
export function validateBookData(book: Book): FieldsValidationData {
  const result = getDefaultFieldsValidationData();
  result.title = validateBookTitle(book.title);
  result.authors = validateBookAuthors(book.authors);
  result.pageCount = validateBookPagesCount(book.pagesCount);
  result.publisher = validateBookPublisher(book.publisher);
  result.publicationYear = validateBookPublicationYear(book.publicationYear);
  result.releaseDate = validateBookReleaseDate(book.releaseDate);
  if (book.releaseDate && result.releaseDate) {
    /** меняем дату под формат yyyy-mm-dd, т.к. в сафари нету браузерного datepicker
     * и пользователь может ввести дату руками */
    let date = parseDateFromString(book.releaseDate);
    if (isValid(date)) {
      book.releaseDate = format(date, 'yyyy-MM-dd');
    }
  }

  result.isbn = validateBookIsbn(book.isbn);

  return result;
}
