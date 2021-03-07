import { FC } from 'react';

import FormField from './components/FormField';

export interface FormProps {
  /** описание формы */
  description?: string;
  /** имя класса для доп стилей */
  className?: string;
}

export interface FormComponent extends FC<FormProps> {
  /** элемент формы */
  FormField: typeof FormField;
}
