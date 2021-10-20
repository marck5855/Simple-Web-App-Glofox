//import logo from './logo.svg';
import React, { Fragment } from 'react';
import './styles/style.scss';
import Inicio from './Inicio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import FormularioRegistro from './FormularioRegistro';
import Servicios from './Servicios';

const App = () =>
  <Router>
    <Switch>|
    <Route path="/" exact component={Inicio} />
    <Route path="/FormularioRegistro" exact component={FormularioRegistro} />
    <Route path="/Servicios" exact component={Servicios} />
    <Route component={() => (
      <div>
        <h1>Error 404</h1>
        <spam>Web Page not found.!!</spam>
      </div>
    )} />
    </Switch>
  </Router>

export default App;
