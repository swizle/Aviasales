import React from 'react';

import './ticketList.scss';

import Ticket from '../ticket';

export default function TicketList() {
  return (
    <section className="TicketList">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </section>
  );
}
