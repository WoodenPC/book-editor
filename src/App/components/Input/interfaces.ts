import { ChangeEvent } from 'react';

export interface InputAttributes {
  /** тип инпута */
  type?: 'text' | 'number' | 'date';
  /** плейсхолдер */
  placeholder?: string;
  /** ширина инпута */
  width?: string;
  /** идентификатор */
  id?: string;
  /** максимальная длина ввода */
  maxLength?: number;
  /** максимальное значение */
  max?: number;
  /** минимальное значение */
  min?: number;
}

export interface InputProps {
  /** значение инпута */
  value?: string | number;
  /** колбэк изменения значения */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** тип инпута */
  type?: 'text' | 'number' | 'date';
  /** плейсхолдер */
  placeholder?: string;
  /** ширина инпута */
  width?: string;
  /** идентификатор */
  id?: string;
  /** максимальная длина ввода */
  maxLength?: number;
  /** максимальное значение */
  max?: number;
  /** минимальное значение */
  min?: number;
  /** аттрибуты инпута */
  inputAttributes?: InputAttributes;
}

export interface InputWrapperStyledProps {
  /** ширина инпута */
  $width?: string;
}
