import { Book, BooksSortingRules } from '../../interfaces';

import { compareByTitle } from './compareByTitle';
import { compareByPublicationYear } from './compareByPublicationYear';

/** получение книг в отсортированном порядке */
export function getSortedBooks(books: Book[], sortingRules: BooksSortingRules): Book[] {
  const { byTitle, byPublicationYear } = sortingRules;
  const comparators: Array<(book1: Book, book2: Book) => boolean> = [];
  if (byTitle !== 'none') {
    comparators.push(compareByTitle(byTitle));
  }

  if (byPublicationYear !== 'none') {
    comparators.push(compareByPublicationYear(byPublicationYear));
  }

  if (comparators.length === 0) {
    return [];
  }

  const updatedBooks = [...books];
  updatedBooks.sort((book1, book2) => {
    if (comparators.every((compareFunc) => compareFunc(book1, book2))) {
      return 1;
    } else {
      return -1;
    }
  });
  return updatedBooks;
}
