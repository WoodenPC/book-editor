import { SortingRule } from '../../../interfaces';

/** получение суффикса сортировки для кнопок */
export function getButtonSortSuffix(sortingRule: SortingRule): string {
  if (sortingRule === 'none') {
    return '';
  }

  return sortingRule === 'asc' ? '\u2191' : '\u2193';
}
