import { Book, SortingRule } from '../../interfaces';

/** сравнение по году публикации */
export function compareByPublicationYear(sortingRule: SortingRule) {
  return function (book1: Book, book2: Book): boolean {
    const publicationYear1 = book1.publicationYear || 1800;
    const publicationYear2 = book2.publicationYear || 1800;
    return sortingRule === 'asc' ? publicationYear1 < publicationYear1 : publicationYear2 >= publicationYear1;
  };
}
