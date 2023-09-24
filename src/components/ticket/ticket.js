import React from 'react';

import './ticket.scss';
import logo from './logo.png';

export default function Ticket() {
  return (
    <section className="Ticket">
      <div className="header">
        <h2 className="price">13 400 P</h2>
        <img className="logo" src={logo} alt="company logo" />
      </div>
      <div className="info">
        <div className="route">
          <div className="container">
            <p className="city">mow - hkt</p>
            <p className="time">10:45 - 08:00</p>
          </div>
          <div className="container">
            <p className="city">mow - hkt</p>
            <p className="time">11:20 - 00:50</p>
          </div>
        </div>
        <div className="length">
          <div className="container">
            <p className="city">в пути</p>
            <p className="time">21ч 15м</p>
          </div>
          <div className="container">
            <p className="city">в пути</p>
            <p className="time">13ч 30м</p>
          </div>
        </div>
        <div className="stops">
          <div className="container">
            <p className="city">2 пересадки</p>
            <p className="time">HGB, JNB</p>
          </div>
          <div className="container">
            <p className="city">1 пересадка</p>
            <p className="time">HGB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
