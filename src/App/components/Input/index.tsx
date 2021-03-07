import React, { memo, FC } from 'react';
import { InputProps } from './interfaces';

import { InputStyled, InputWrapperStyled } from './styles';

/** компонент поле ввода */
const Input: FC<InputProps> = (props) => {
  const { value, onChange, type = 'text', placeholder, width = '100%', id, maxLength, min, max } = props;
  return (
    <InputWrapperStyled $width={width}>
      <InputStyled
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={id}
        maxLength={maxLength}
        min={min}
        max={max}
      />
    </InputWrapperStyled>
  );
};

export default memo(Input);
