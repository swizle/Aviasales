import axios from 'axios';

export const TOGGLE_SORT_FILTER = 'TOGGLE_SORT_FILTER';
export const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS';
export const GET_SEARCH_ID = 'GET_SEARCH_ID';
export const GET_TICKETS = 'GET_TICKETS';
export const ADD_TICKETS = 'ADD_TICKETS';

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

export const addTickets = (tickets) => ({
  type: ADD_TICKETS,
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

export const fetchTicketsFirst = (searchId) => async (dispatch) => {
  try {
    const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

    const updatedTickets = response.data.tickets.map((ticket, index) => ({
      ...ticket,
      ticketId: index,
    }));

    dispatch(getTickets(updatedTickets));
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
};

export const fetchTickets = (searchId) => async (dispatch) => {
  try {
    const getTicketsRecursively = async () => {
      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      const { stop, tickets: newTickets } = response.data;

      if (newTickets) {
        const updatedTickets = newTickets.map((ticket, index) => ({
          ...ticket,
          ticketId: index,
        }));

        dispatch(addTickets(updatedTickets));
      }

      if (!stop) {
        await getTicketsRecursively();
      }
    };

    await getTicketsRecursively();
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
};
