import { FieldsValidationData } from '../interfaces';

/** проверяет валидность всех полей */
export function checkIfAllFieldsAreValid(fieldsValidationData: FieldsValidationData): boolean {
  let isValidData = true;
  Object.keys(fieldsValidationData).forEach((key) => {
    isValidData = isValidData && fieldsValidationData[key].status;
  });

  return isValidData;
}
