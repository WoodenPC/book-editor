import { Book } from '../../interfaces';

export interface BooksListProps {
  /** книги */
  books: Book[];
  /** колбэк удаления книги */
  onRemoveBook: (book: Book) => void;
}
