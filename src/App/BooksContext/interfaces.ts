import { Book, BooksSortingRules } from '../interfaces';

export interface BooksContextState {
  /** добавление новой книги */
  handleAddBook: (book: Book) => void;
  /** удаление книги */
  handleRemoveBook: (book: Book) => void;
  /** обновление книги */
  handleUpdateBook: (book: Book) => void;
  /** сортировка книг по названию */
  handleSortByTitle: () => void;
  /** сортировка книг по году публикации */
  handleSortByPublicationYear: () => void;
  /** сортировка книг по году публикации */
  handleGetSortedBooks: (books: Book[], sortingRules: BooksSortingRules) => Book[];
  /** книги */
  books: Book[];
  /** правила сортировки */
  sortingRules: BooksSortingRules;
}
