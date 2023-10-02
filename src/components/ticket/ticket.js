/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import './ticket.scss';
import logo from './logo.png';

export default function Ticket({ ticketId }) {
  const ticket = useSelector((state) => {
    // Замените 'tickets' на соответствующее имя свойства в вашем стейте Redux
    const { tickets } = state;

    // Найдите билет с заданным ID
    return tickets.find((mytTicket, index) => index === ticketId);
  });

  if (!ticket) {
    // Если билет с заданным ID не найден, можно отобразить сообщение об ошибке или заглушку
    return <div>Билет не найден</div>;
  }

  const { price, segments } = ticket;

  return (
    <section className="Ticket">
      <div className="header">
        <h2 className="price">
          {price}
          {' '}
          P
        </h2>
        <img className="logo" src={logo} alt="company logo" />
      </div>
      <div className="info">
        <div className="route">
          <div className="container">
            <p className="city">
              {segments[0].origin}
              {' - '}
              {segments[0].destination}
            </p>
            <p className="time">
              {format(new Date(segments[0].date), 'HH:mm')}
              {' - '}
              {format(new Date(segments[0].date).setMinutes(new Date(segments[0].date).getMinutes() + segments[0].duration), 'HH:mm')}
            </p>
          </div>
          <div className="container">
            <p className="city">
              {segments[1].origin}
              {' - '}
              {segments[1].destination}
            </p>
            <p className="time">
              {format(new Date(segments[1].date), 'HH:mm')}
              {' - '}
              {format(new Date(segments[1].date).setMinutes(new Date(segments[1].date).getMinutes() + segments[1].duration), 'HH:mm')}
            </p>
          </div>
        </div>
        <div className="length">
          <div className="container">
            <p className="city">в пути</p>
            <p className="time">
              {format(new Date().setMinutes(segments[0].duration), 'Hч mм')}
            </p>
          </div>
          <div className="container">
            <p className="city">в пути</p>
            <p className="time">
              {format(new Date().setMinutes(segments[1].duration), 'Hч mм')}
            </p>
          </div>
        </div>
        <div className="stops">
          <div className="container">
            <p className="city">
              {segments[0].stops.length}
              {' '}
              пересад
              {segments[0].stops.length === 1 ? 'ка'
                : segments[0].stops.length > 1 && segments[0].stops.length < 5
                  ? 'ки' : 'ок'}
            </p>
            <p className="time">{segments[0].stops.join(', ') || '-'}</p>
          </div>
          <div className="container">
            <p className="city">
              {segments[1].stops.length}
              {' '}
              пересад
              {segments[0].stops.length === 1 ? 'ка'
                : segments[0].stops.length > 1 && segments[0].stops.length < 5
                  ? 'ки' : 'ок'}
            </p>
            <p className="time">{segments[1].stops.join(', ') || '-'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
