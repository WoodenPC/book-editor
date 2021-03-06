import React, { memo, FC } from 'react';

import { ButtonProps } from './interfaces';
import { ButtonStyled } from './styles';

/** компонент кнопки */
const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default memo(Button);
