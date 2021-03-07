/** Автор */
export interface Author {
  /** имя */
  name: string;
  /** фамилия */
  surname: string;
}

/** Книга */
export interface Book {
  /** идентификатор книги */
  id: string;
  /** заголовок книги */
  title: string;
  /** список автором */
  authors: Author[];
  /** количество страниц */
  pagesCount: number;
  /** издатель */
  publisher?: string;
  /** год публикации */
  publicationYear?: number;
  /** дата выхода в тираж */
  releaseDate?: string;
  /** ISBN */
  isbn?: string;
  /** изображение */
  image?: string;
}

/** сортировка */
export type SortingRule = 'asc' | 'desc' | 'none';

/** Набор сортировок для списка книг */
export interface BooksSortingRules {
  /** сортировка по названию */
  byTitle: SortingRule;
  /** сортировка по году публикации */
  byPublicationYear: SortingRule;
}
