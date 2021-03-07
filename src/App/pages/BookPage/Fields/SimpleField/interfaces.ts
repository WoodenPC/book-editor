import { InputProps } from '../../../../components/Input/interfaces';

export interface SimpleFieldProps extends InputProps {
  /** подпись поля */
  label?: string;
  /** обязательное ли поле */
  isRequired?: boolean;
  /** валидационный статус */
  validationStatus?: boolean;
  /** валидационное сообщение */
  validationMessage?: string;
}
