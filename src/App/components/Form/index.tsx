import React, { FC } from 'react';

import { FormStyled } from './styles';

/** компонент формы */
const Form: FC = ({ children }) => {
  return <FormStyled>{children}</FormStyled>;
};

export default Form;
