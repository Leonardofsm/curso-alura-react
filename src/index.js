import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre';
import Livros from './Pages/Livros/Livros';
import Autores from './Pages/Autores/Autores';
import NotFound from './Pages/NotFound/NotFound';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"exact={true} component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/autores" component={Autores} />
      <Route path="/livros" component={Livros} />
      <Route component={NotFound} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
