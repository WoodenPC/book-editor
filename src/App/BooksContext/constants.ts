/** ключ книг в localStorage */
import { BooksSortingRules } from '../interfaces';
import { BooksContextState } from './interfaces';

export const BOOOKS_LOCAL_STORAGE_KEY = 'books';

/** ключ правил сортировки в localStorage */
export const SORTING_RULES_LOCAL_STORAGE_KEY = 'sortingRules';

/** дефолтные правила сортировки */
export const DEFAULT_SORTING_RULES: BooksSortingRules = {
  byTitle: 'none',
  byPublicationYear: 'none',
};

/** дефолтный контекст */
export const DEFAULT_BOOKS_CONTEXT: BooksContextState = {
  books: [],
  sortingRules: { byPublicationYear: 'none', byTitle: 'none' },
  handleAddBook: (_) => {},
  handleRemoveBook: (_) => {},
  handleUpdateBook: (_) => {},
  handleSortByTitle: () => {},
  handleSortByPublicationYear: () => {},
};
