export interface FormFieldProps {
  /** название поля формы */
  label?: string;
  /** обязательное ли поле */
  isRequired?: boolean;
  /** имя класса для доп стилей */
  className?: string;
}

export interface LabelStyledProps {
  /** обязательное ли поле */
  $isRequired?: boolean;
}
