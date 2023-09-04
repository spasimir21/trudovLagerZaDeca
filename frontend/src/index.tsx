import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import React from 'react';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
