import React from 'react';

type ButtonAppearance = 'primary' | 'secondary';
type ButtonVariant = 'outlined' | 'default';

export interface ButtonProps {
  /** колбэк на клик по кнопке */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** текст кнопки */
  text?: string;
  /** вид кнопки */
  appearance?: ButtonAppearance;
  /** вариант обрамления кнопки */
  variant?: ButtonVariant;
  /** идентификатор кнопки */
  id?: string;
}

export interface ButtonStyledProps {
  /** вид ссылки */
  $appearance?: ButtonAppearance;
  /** вариант обрамления ссылки */
  $variant?: ButtonVariant;
}
