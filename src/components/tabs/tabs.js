import React from 'react';

import './tabs.scss';

export default function Tabs() {
  return (
    <section className="tabs">
      <button className="btnTab" type="button">
        самый дешевый
      </button>
      <button className="btnTab" type="button">
        самый быстрый
      </button>
      <button className="btnTab" type="button">
        оптимальный
      </button>
    </section>
  );
}
