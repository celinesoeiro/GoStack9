import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Repository from './pages/Repository';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

// O Switch é o responsável por alterar as paginas sem fazer o load.
// Todas as páginas ficam dentro do swith em um <Route>
// O exact serve para que na hora de localizar no browser a rota não seja
// confundida com outra.
