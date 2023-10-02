import axios from 'axios';

export const TOGGLE_SORT_FILTER = 'TOGGLE_SORT_FILTER';
export const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS';
export const GET_SEARCH_ID = 'GET_SEARCH_ID';
export const GET_TICKETS = 'GET_TICKETS';

export const toggleSortFilter = (filterName) => ({
  type: TOGGLE_SORT_FILTER,
  payload: { filterName },
});

export const toggleAllFilters = (isChecked) => ({
  type: TOGGLE_ALL_FILTERS,
  payload: { isChecked },
});

export const getSearchId = (searchId) => ({
  type: GET_SEARCH_ID,
  payload: searchId,
});

export const getTickets = (tickets) => ({
  type: GET_TICKETS,
  payload: tickets,
});

export const fetchSearchId = () => async (dispatch) => {
  try {
    const response = await axios.get('https://aviasales-test-api.kata.academy/search');
    dispatch(getSearchId(response.data.searchId));
  } catch (error) {
    console.error('Error fetching searchId:', error);
  }
};

export const fetchTickets = (searchId) => async (dispatch) => {
  try {
    const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

    const updatedTickets = response.data.tickets.map((ticket, index) => ({
      ...ticket,
      ticketId: index,
    }));

    dispatch(getTickets(updatedTickets));

    if (response.data.stop) {
      // Здесь вы можете обработать завершение поиска, если необходимо
    }
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
};
