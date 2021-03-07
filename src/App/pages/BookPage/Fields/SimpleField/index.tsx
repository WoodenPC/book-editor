import React, { FC, memo } from 'react';

import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import { SimpleFieldProps } from './interfaces';

/** Простое поле */
const SimpleField: FC<SimpleFieldProps> = (props) => {
  const { value, onChange, label, isRequired, type, placeholder } = props;
  return (
    <Form.FormField label={label} isRequired={isRequired}>
      <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </Form.FormField>
  );
};

export default memo(SimpleField);
