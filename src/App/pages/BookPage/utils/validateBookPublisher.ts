import { ValidationData } from '../interfaces';

/** валидация издателя книги */
export function validateBookPublisher(publisher?: string): ValidationData {
  if (publisher && publisher.length > 30) {
    return {
      status: false,
      message: 'Название издательства не должно превышать 30 символов',
    };
  }

  return {
    status: true,
  };
}
