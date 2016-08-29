import React from 'react';
import { render } from 'react-dom';

// ### Static Global Assets
// ----------------------------------------------------------------------------
import './assets/images/favicon.ico'; // webpack to load favicon.ico
import './assets/styles/app.scss'; // root SASS style tree


// ### Routes
// ----------------------------------------------------------------------------
import { Router, browserHistory } from 'react-router';
import routes from './routes';


// ### Application Bootstrap
// ----------------------------------------------------------------------------
render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
