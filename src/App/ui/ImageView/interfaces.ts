export interface ImageProps {
  /** ширина */
  width?: number;
  /** высота */
  height?: number;
  /** путь до картинки/картинка в виде строки */
  src?: string;
  /** альтернативный текст */
  alt?: string;
}

export interface ImageNotFoundStyledWrapperProps {
  /** ширина */
  $width: number;
  /** высота */
  $height: number;
}
