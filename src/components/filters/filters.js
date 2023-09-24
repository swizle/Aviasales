import React from 'react';

import './filters.scss';

export default function Filters() {
  return (
    <section className="filterList">
      <p className="title">количество пересадок</p>
      <ul className="filters">
        <li className="filter">
          <input className="input" type="checkbox" />
          <span className="checkBox" />
          Все
        </li>
        <li className="filter">
          <input className="input" type="checkbox" />
          <span className="checkBox" />
          Без пересадок
        </li>
        <li className="filter">
          <input className="input" type="checkbox" />
          <span className="checkBox" />
          1 пересадка
        </li>
        <li className="filter">
          <input className="input" type="checkbox" />
          <span className="checkBox" />
          2 пересадки
        </li>
        <li className="filter">
          <input className="input" type="checkbox" />
          <span className="checkBox" />
          3 пересадки
        </li>
      </ul>
    </section>
  );
}
