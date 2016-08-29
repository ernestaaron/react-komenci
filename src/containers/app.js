import React, { Component, PropTypes } from 'react';

import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';

/*
 * App Component - Root component of our application
 *                 include here the shared functionality of the app
 */
class App extends Component {
  // component properties
  static propTypes = {
    children: PropTypes.element             // element children
  }

  // Render App Shared Components
  render() {
    const children = this.props.children;
    return (
      <div className="expanded row column">
        <AppHeader />

        {children}

        <AppFooter />
      </div>
    );
  }
}

export default App;
