import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import PageHome from './components/page-home';
import PageNotFound from './components/page-not-found';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageHome} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
