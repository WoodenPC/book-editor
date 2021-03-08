/** регулярка ISBN */
export const ISBN_REGEX = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;

/** атрибуты инпута для поле с заголовком */
export const TITLE_FIELD_ATTRIBUTES = {
  maxLength: 30,
};

/** атрибуты инпута для поле с заголовком */
export const PUBLISHER_FIELD_ATTRIBUTES = {
  maxLength: 30,
};
