/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { toggleSortFilter, toggleAllFilters } from '../actions';

import './filters.scss';

function Filters({ filters, toggleFilter, toggleAll }) {
  const handleToggleFilter = (filterName) => {
    toggleFilter(filterName);
  };

  const handleToggleAllFilters = (filterName) => {
    toggleFilter(filterName);
    toggleAll(!filters.all);
  };

  return (
    <section className="filterList">
      <p className="title">количество пересадок</p>
      <ul className="filters">
        <li className="filter">
          <label htmlFor="1" className="container">
            <input
              id="1"
              className="input"
              type="checkbox"
              checked={filters.all}
              onChange={() => handleToggleAllFilters('all')}
            />
            <span className="checkBox" />
            Все
          </label>
        </li>
        <li className="filter">
          <label htmlFor="2" className="container">
            <input
              id="2"
              className="input"
              type="checkbox"
              checked={filters.noStops}
              onChange={() => handleToggleFilter('noStops')}
            />
            <span className="checkBox" />
            Без пересадок
          </label>
        </li>
        <li className="filter">
          <label htmlFor="3" className="container">
            <input
              id="3"
              className="input"
              type="checkbox"
              checked={filters.oneStop}
              onChange={() => handleToggleFilter('oneStop')}
            />
            <span className="checkBox" />
            1 пересадка
          </label>
        </li>
        <li className="filter">
          <label htmlFor="4" className="container">
            <input
              id="4"
              className="input"
              type="checkbox"
              checked={filters.twoStops}
              onChange={() => handleToggleFilter('twoStops')}
            />
            <span className="checkBox" />
            2 пересадки
          </label>
        </li>
        <li className="filter">
          <label htmlFor="5" className="container">
            <input
              id="5"
              className="input"
              type="checkbox"
              checked={filters.threeStops}
              onChange={() => handleToggleFilter('threeStops')}
            />
            <span className="checkBox" />
            3 пересадки
          </label>
        </li>
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFilter: (filterName) => dispatch(toggleSortFilter(filterName)),
  toggleAll: (isChecked) => dispatch(toggleAllFilters(isChecked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
