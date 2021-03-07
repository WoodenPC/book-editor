import { Book, BooksSortingRules } from '../../interfaces';

export interface BooksListProps {
  /** книги */
  books: Book[];
  /** колбэк удаления книги */
  onRemoveBook: (book: Book) => void;
  /** правила сортировки */
  sortingRules: BooksSortingRules;
  /** колбэк сортировки по заголовку */
  onSortByTitle: () => void;
  /** колбэк сортировки по году публикации */
  onSortByPublicationYear: () => void;
}
