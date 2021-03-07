import { FieldsValidationData } from '../interfaces';

/** получение дефолтных данных для валдации полей */
export function getDefaultFieldsValidationData(): FieldsValidationData {
  return {
    title: { status: true },
    pageCount: { status: true },
    authors: { status: true },
    publicationYear: { status: true },
    publisher: { status: true },
    releaseDate: { status: true },
    isbn: { status: true },
  };
}
