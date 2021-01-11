import Dashboard from './Dashboard';
import ReactDOM from 'react-dom';
import React from 'react';

export function render(el) {
  const rootElement = document.getElementById(el);
  ReactDOM.render(<Dashboard />, rootElement);
}
