import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App/App';
import store from './Store/Store.js'
import { createBrowserHistory } from 'history';

import './index.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
