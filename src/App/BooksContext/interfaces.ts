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
  /** книги */
  books: Book[];
  /** правила сортировки */
  sortingRules: BooksSortingRules;
}
