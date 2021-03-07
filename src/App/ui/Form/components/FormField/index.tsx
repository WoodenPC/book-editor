import React, { FC } from 'react';

import { FormFieldProps } from './interfaces';

import { LabelStyled } from './styles';

/** компонент поля формы */
const FormField: FC<FormFieldProps> = ({ isRequired, label, children, className }) => {
  return (
    <div className={className}>
      {label && <LabelStyled $isRequired={isRequired}>{label}</LabelStyled>}
      {children}
    </div>
  );
};

export default FormField;
