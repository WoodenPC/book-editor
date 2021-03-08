import React from 'react';

import { FormStyled } from './styles';
import { FormComponent } from './interfaces';
import FormField from './components/FormField';

/** компонент формы */
const Form: FormComponent = ({ children, description, className }) => {
  return (
    <div>
      {description && <p>{description}</p>}
      <FormStyled className={className}>{children}</FormStyled>
    </div>
  );
};

Form.FormField = FormField;

export default Form;
