import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClockMub from './MClock.js';

const start = new Date().getTime();

  const clockTab = [
    {name: 'React_cont3', size: 80},
    {name: 'React_cont4', size: 160},
    {name: 'React_cont5', size: 220},
  ];

  clockTab.forEach(tab_i => {
    ReactDOM.createRoot(document.getElementById(tab_i.name))
    .render( <ClockMub clockSize={tab_i.size} />);
  })
  