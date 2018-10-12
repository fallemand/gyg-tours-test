import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';

import ToursPage from './pages/tours/ToursPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import './assets/images/logo.svg';
import './styles/_common.scss';

/**
 * Render SPA
 */
render((
  <Router>
    <Switch>
      <Route exact path="/tours" component={ToursPage} />
      <Route exact path="/" render={() => <Redirect to="/tours" />} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
), document.getElementById('root-app'));
