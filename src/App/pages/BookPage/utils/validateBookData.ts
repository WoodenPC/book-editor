import { Book } from '../../../interfaces';

/** валидация данных книги */
export function validateBookData(book: Book): string[] {
  const validationMessages: string[] = [];
  if (book.title.length === 0) {
    validationMessages.push('Названиие книги не введено');
  }

  return validationMessages;
}
