import React, { memo, FC } from 'react';

import { InputProps } from './interfaces';
import { InputStyled, InputWrapperStyled } from './styles';

/** компонент поле ввода */
const Input: FC<InputProps> = (props) => {
  const { value, onChange, type = 'text', placeholder, width = '100%', id, inputAttributes = {}, defaultValue } = props;

  return (
    <InputWrapperStyled $width={width}>
      <InputStyled
        value={value || ''}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={id}
        defaultValue={defaultValue}
        {...inputAttributes}
      />
    </InputWrapperStyled>
  );
};

export default memo(Input);
