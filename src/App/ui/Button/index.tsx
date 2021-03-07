import React, { memo, FC } from 'react';

import { ButtonProps } from './interfaces';
import { ButtonStyled } from './styles';

/** компонент кнопки */
const Button: FC<ButtonProps> = (props) => {
  const { onClick, text, appearance, variant, id } = props;
  return (
    <ButtonStyled id={id} onClick={onClick} $appearance={appearance} $variant={variant}>
      {text}
    </ButtonStyled>
  );
};

export default memo(Button);
