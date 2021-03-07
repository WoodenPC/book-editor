export interface ImageFieldProps {
  /** значение картинки */
  imageUrl?: string;
  /** колбэк изменения картинки */
  onChange: (imageUrl?: string) => void;
}
