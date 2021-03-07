import { InputProps } from '../../../../components/Input/interfaces';

export type SimpleFieldProps = Pick<
  InputProps,
  'value' | 'onChange' | 'type' | 'width' | 'placeholder' | 'maxLength'
> & {
  /** подпись поля */
  label?: string;
  /** обязательное ли поле */
  isRequired?: boolean;
};
