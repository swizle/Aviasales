/* eslint-disable default-param-last */
const initialState = {
  filters: {
    all: false,
    noStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  },
  sortBy: '', // здесь храните состояние сортировки
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SORT_FILTER': {
      const { filterName } = action.payload;
      const updatedFilters = {
        ...state.filters,
        [filterName]: !state.filters[filterName],
      };

      if (filterName !== 'all' && Object.keys(updatedFilters)
        .filter((key) => key !== 'all')
        .every((key) => updatedFilters[key])) {
        updatedFilters.all = true;
      } else {
        updatedFilters.all = false;
      }

      return {
        ...state,
        filters: updatedFilters,
      };
    }

    case 'TOGGLE_ALL_FILTERS': {
      const { isChecked } = action.payload;
      if (isChecked) {
        // Включаем все фильтры
        return {
          ...state,
          filters: {
            all: true,
            noStops: true,
            oneStop: true,
            twoStops: true,
            threeStops: true,
          },
        };
      }
      // Выключаем все фильтры
      return {
        ...state,
        filters: {
          all: false,
          noStops: false,
          oneStop: false,
          twoStops: false,
          threeStops: false,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
