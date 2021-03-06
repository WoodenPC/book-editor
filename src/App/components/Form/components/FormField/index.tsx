import React, { FC } from 'react';

import { FormFieldProps } from './interfaces';

/** компонент поля формы */
const FormField: FC<FormFieldProps> = ({ label, children }) => {
  return <label>{children}</label>;
};

export default FormField;
