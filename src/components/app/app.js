import React from 'react';

import './app.scss';
import logo from './logo.png';

import Filters from '../filters';
import Tabs from '../tabs';
import TicketList from '../ticketList';

export default function App() {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="logo" />
      </header>
      <main>
        <Filters />
        <section className="container">
          <Tabs />
          <TicketList />
        </section>
      </main>
    </>
  );
}
