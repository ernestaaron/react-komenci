import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import HomePage from './components/home-page';
import PageNotFound from './components/page-not-found.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
