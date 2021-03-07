/** сохранение книги в localStorage */
import { Book } from '../../interfaces';
import { BOOOKS_LOCAL_STORAGE_KEY } from '../constants';

/** сохранение книги в localStorage */
export function saveBooksToStorage(books: Book[] = []): void {
  localStorage.setItem(BOOOKS_LOCAL_STORAGE_KEY, JSON.stringify(books));
}
