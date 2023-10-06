import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSortFilter, toggleAllFilters } from '../../actions';

import './filters.scss';

function Filters() {
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const checkboxes = [
    { id: 'all', label: 'Все' },
    { id: 'noStops', label: 'Без пересадок' },
    { id: 'oneStop', label: '1 пересадка' },
    { id: 'twoStops', label: '2 пересадки' },
    { id: 'threeStops', label: '3 пересадки' },
  ];

  const handleToggleFilter = (filterName) => {
    dispatch(toggleSortFilter(filterName));
  };

  const handleToggleAllFilters = () => {
    dispatch(toggleSortFilter('all'));
    dispatch(toggleAllFilters(!filters.all));
  };

  return (
    <section className="filterList">
      <p className="title">количество пересадок</p>
      <ul className="filters">
        {checkboxes.map((checkbox) => (
          <li className="filter" key={checkbox.id}>
            <label htmlFor={checkbox.id} className="container">
              <input
                id={checkbox.id}
                className="input"
                type="checkbox"
                checked={checkbox.id === 'all' ? filters.all : filters[checkbox.id]}
                onChange={() => (checkbox.id === 'all' ? handleToggleAllFilters() : handleToggleFilter(checkbox.id))}
              />
              <span className="checkBox" />
              {checkbox.label}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filters;
