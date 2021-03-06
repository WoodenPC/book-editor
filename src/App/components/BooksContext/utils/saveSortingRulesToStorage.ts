import { BooksSortingRules } from '../../../interfaces';
import { SORTING_RULES_LOCAL_STORAGE_KEY } from '../constants';

/** сохранение правил сортировки в localstorage */
export function saveSortingRulesToStorage(sortingRules: BooksSortingRules): void {
  localStorage.setItem(SORTING_RULES_LOCAL_STORAGE_KEY, JSON.stringify(sortingRules));
}
