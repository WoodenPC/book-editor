import { Book, SortingRule } from '../../../interfaces';

/** сравнение по году публикации */
export function compareByTitle(sortingRule: SortingRule) {
  return function (book1: Book, book2: Book): boolean {
    return sortingRule === 'asc' ? book1.title < book2.title : book1.title >= book2.title;
  };
}
