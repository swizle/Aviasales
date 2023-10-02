export const toggleSortFilter = (filterName) => ({
  type: 'TOGGLE_SORT_FILTER',
  payload: { filterName },
});

export const toggleAllFilters = (isChecked) => ({
  type: 'TOGGLE_ALL_FILTERS',
  payload: { isChecked },
});
