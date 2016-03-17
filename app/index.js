import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.css';

const node = document.createElement('div');

(function() {
  const node = document.createElement('div');

  document.getElementsByTagName('body')[0].appendChild(node);
  return ReactDOM.render(<App />, node);
})();
