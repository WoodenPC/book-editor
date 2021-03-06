import { Book } from '../../../../interfaces';

export interface BooksListItemProps {
  /** книга */
  book: Book;
  /** колбэк удаления книги */
  onRemoveBook: (book: Book) => void;
}
