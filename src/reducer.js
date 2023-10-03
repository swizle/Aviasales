/* eslint-disable default-param-last */
import {
  TOGGLE_SORT_FILTER, TOGGLE_ALL_FILTERS, GET_SEARCH_ID, GET_TICKETS,
} from './actions';

const initialState = {
  filters: {
    all: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
  },
  searchId: '',
  tickets: [],
  stop: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SORT_FILTER: {
      const { filterName } = action.payload;
      const updatedFilters = {
        ...state.filters,
        [filterName]: !state.filters[filterName],
      };

      // Проверка для фильтра Все
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

    case TOGGLE_ALL_FILTERS: {
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

    case GET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      };

    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
