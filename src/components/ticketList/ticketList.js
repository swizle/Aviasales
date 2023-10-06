import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ticketList.scss';

import Ticket from '../ticket';
import { fetchTickets } from '../../actions';

export default function TicketList() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);
  const tickets = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filters);

  const [listSize, setListSize] = useState(5);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);

  const buttons = [
    { id: 'cheapest', label: 'самый дешевый' },
    { id: 'fastest', label: 'самый быстрый' },
  ];

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId))
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching tickets:', error);
          setLoading(false);
        });
    }
  }, [dispatch, searchId]);

  useEffect(() => {
    // Фильтрация билетов на основе выбранных фильтров
    const filtered = tickets.filter((ticket) => {
      const { segments } = ticket;
      const segment0 = segments[0].stops.length;
      const segment1 = segments[1].stops.length;

      return (
        (filters.noStops && (segment0 === 0 && segment1 === 0))
        || (filters.oneStop && (segment0 === 1 && segment1 === 1))
        || (filters.twoStops && (segment0 === 2 && segment1 === 2))
        || (filters.threeStops && (segment0 === 3 && segment1 === 3))
      );
    });

    setFilteredTickets(filtered);
  }, [filters, tickets]);

  const handleBtnMore = () => {
    const newSize = listSize + 5;
    setListSize(newSize);
  };

  const handleButtonClick = (id) => {
    setActiveButton(id);
    if (id === 'cheapest') {
      const cheapestTickets = [...filteredTickets].sort((a, b) => a.price - b.price);
      setFilteredTickets(cheapestTickets);
      setActiveButton('cheapest');
    } else if (id === 'fastest') {
      const fastestTickets = [...filteredTickets].sort((a, b) => {
        const durationA = a.segments[0].duration + a.segments[1].duration;
        const durationB = b.segments[0].duration + b.segments[1].duration;
        return durationA - durationB;
      });
      setFilteredTickets(fastestTickets);
      setActiveButton('fastest');
    }
  };

  return (
    <section className="TicketList">
      <section className="tabs">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`btnTab ${activeButton === button.id ? 'active' : ''}`}
            type="button"
            onClick={() => handleButtonClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </section>
      {loading ? (
        <section className="loader">
          <div className="header">
            <h2>Загрузка...</h2>
          </div>
        </section>
      ) : (
        <>
          {filteredTickets.slice(0, listSize).map((ticket) => (
            <Ticket key={ticket.ticketId} ticketId={ticket.ticketId} />
          ))}
          <button className="btnMore" type="button" onClick={handleBtnMore}>
            показать еще 5 билетов!
          </button>
        </>
      )}
    </section>
  );
}
