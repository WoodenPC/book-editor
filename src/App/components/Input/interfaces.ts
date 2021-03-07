import { ChangeEvent } from 'react';

export interface InputAttributes {
  /** максимальная длина ввода */
  maxLength?: number;
  /** максимальное значение */
  max?: number | string;
  /** минимальное значение */
  min?: number | string;
  /** патттерн инпута */
  pattern?: string;
}

export interface InputProps {
  /** значение инпута */
  value?: string | number;
  /** колбэк изменения значения */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** плейсхолдер */
  placeholder?: string;
  /** ширина инпута */
  width?: string;
  /** идентификатор */
  id?: string;
  /** аттрибуты инпута */
  inputAttributes?: InputAttributes;
  /** тип инпута */
  type?: 'text' | 'number' | 'date';
}

export interface InputWrapperStyledProps {
  /** ширина инпута */
  $width?: string;
}
