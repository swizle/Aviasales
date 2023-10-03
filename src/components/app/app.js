import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './app.scss';
import logo from '../../assets/app/logo.png';

import Filters from '../filters';
import TicketList from '../ticketList';
import { fetchSearchId } from '../../actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="logo" />
      </header>
      <main>
        <Filters />
        <section className="container">
          <TicketList />
        </section>
      </main>
    </>
  );
}

export default App;
