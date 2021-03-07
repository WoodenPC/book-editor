/** аттрибуты поля названия книги */
export const TITLE_FIELD_INPUT_ATTRS = {
  maxLength: 30,
};

/** аттрибуты поля кол-ва страниц */
export const PAGE_COUNT_FIELD_ATTRS = {
  min: 1,
  max: 10000,
};

/** аттрибуты поля названия издательства */
export const PUBLISHER_FIELD_ATTRS = {
  maxLength: 30,
};

/** аттрибуты поля даты публикации */
export const PUBLICATION_YEAR_FIELD_ATTRS = {
  min: 1800,
  max: 2100,
};

/** аттрибуты поля даты выхода в тираж  */
export const RELEASE_DATE_FIELD_ATTRS = {
  min: '1800-01-01',
};

export const ISBN_FIELD_ATTRS = {
  pattern: '^*(?=.{17}$)97(?:8|9)([ -])\\d{1,5}\\1\\d{1,7}\\1\\d{1,6}\\1\\d$',
};
