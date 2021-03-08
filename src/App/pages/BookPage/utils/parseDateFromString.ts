import { isValid, parse } from 'date-fns';

/** парсит дату из строки */
export function parseDateFromString(str = ''): Date {
  let date = new Date(str);
  if (!isValid(date)) {
    date = parse(str, 'dd.mm.yyyy', new Date());
  }

  return date;
}
