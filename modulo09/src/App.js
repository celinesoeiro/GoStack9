import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import History from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={History}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
