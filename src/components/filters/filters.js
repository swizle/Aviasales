import React from 'react';

import './filters.scss';

export default function Filters() {
  return (
    <section className="filterList">
      <p className="title">количество пересадок</p>
      <ul className="filters">
        <li className="filter">
          <label htmlFor="1" className="container">
            <input id="1" className="input" type="checkbox" />
            <span className="checkBox" />
            Все
          </label>
        </li>
        <li className="filter">
          <label htmlFor="2" className="container">
            <input id="2" className="input" type="checkbox" />
            <span className="checkBox" />
            Без пересадок
          </label>
        </li>
        <li className="filter">
          <label htmlFor="3" className="container">
            <input id="3" className="input" type="checkbox" />
            <span className="checkBox" />
            1 пересадка
          </label>
        </li>
        <li className="filter">
          <label htmlFor="4" className="container">
            <input id="4" className="input" type="checkbox" />
            <span className="checkBox" />
            2 пересадки
          </label>
        </li>
        <li className="filter">
          <label htmlFor="5" className="container">
            <input id="5" className="input" type="checkbox" />
            <span className="checkBox" />
            3 пересадки
          </label>
        </li>
      </ul>
    </section>
  );
}
