import { BooksSortingRules } from '../../interfaces';
import { SORTING_RULES_LOCAL_STORAGE_KEY } from '../constants';

/** загрузка правил сортировки из localStorage */
export function loadSortingRulesFromStorage(): BooksSortingRules | null {
  const item = localStorage.getItem(SORTING_RULES_LOCAL_STORAGE_KEY);
  if (!item) {
    return null;
  }

  return JSON.parse(item) as BooksSortingRules;
}
