export interface BookPageUrlParams {
  /** идентификатор книги */
  id: 'string';
}

export interface ValidationData {
  /** валидационный статус */
  status: boolean;
  /** валидационное сообщение */
  message?: string;
}

export interface FieldsValidationData {
  /** валидационные данные заголовка */
  title: ValidationData;
  /** валидационные данные авторов */
  authors: ValidationData;
  /** валидационные данные кол-ва страниц */
  pageCount: ValidationData;
  /** валидационные данные издателя */
  publisher: ValidationData;
  /** валидационные данные года публикации */
  publicationYear: ValidationData;
  /** валидационные данные даты выхода в тираж */
  releaseDate: ValidationData;
  /** валидационные данные isbn */
  isbn: ValidationData;
  /**для итерирования */
  [key: string]: ValidationData;
}
