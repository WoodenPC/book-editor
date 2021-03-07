import { Author } from '../../../../interfaces';

export interface AuthorsFieldProps {
  /** значение поля */
  authors: Author[];
  /** колбэк измненения поля */
  onChange: (authors: Author[]) => void;
}
