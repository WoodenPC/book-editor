import React, { FC, memo } from 'react';

import Form from '../../../../ui/Form';
import Input from '../../../../ui/Input';

import { SimpleFieldProps } from './interfaces';
import { ValidationMessageStyled } from './styles';

/** Простое поле */
const SimpleField: FC<SimpleFieldProps> = (props) => {
  const {
    value,
    onChange,
    label,
    isRequired,
    type,
    placeholder,
    inputAttributes,
    width,
    validationMessage,
    validationStatus,
    defaultValue,
  } = props;
  return (
    <Form.FormField label={label} isRequired={isRequired}>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputAttributes={inputAttributes}
        defaultValue={defaultValue}
        width={width}
      />
      {!validationStatus && <ValidationMessageStyled>{validationMessage}</ValidationMessageStyled>}
    </Form.FormField>
  );
};

export default memo(SimpleField);
