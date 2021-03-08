/** сохранение книги в localStorage */
import { Book } from '../../interfaces';
import { BOOOKS_LOCAL_STORAGE_KEY } from '../constants';

/** загрузка книг из localStorage */
export function loadBooksFromStorage(): Book[] {
  const item = localStorage.getItem(BOOOKS_LOCAL_STORAGE_KEY);
  if (!item) {
    return [];
  }

  try {
    return JSON.parse(item) as Book[];
  } catch (err) {
    console.error(err);
    return [];
  }
}
