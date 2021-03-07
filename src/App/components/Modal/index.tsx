import React, { FC, memo } from 'react';

import { ModalProps } from './interfaces';
import Button from '../Button';

import { ModalStyled, ModalContentStyled, ModalButtonsWrapper } from './styles';

const Modal: FC<ModalProps> = (props) => {
  const { onClose, isOpen, text } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <ModalStyled>
      <ModalContentStyled>
        <h3>{text}</h3>
        <ModalButtonsWrapper>
          <Button text="Хорошо" onClick={onClose} />
        </ModalButtonsWrapper>
      </ModalContentStyled>
    </ModalStyled>
  );
};

export default memo(Modal);
