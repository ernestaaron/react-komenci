import React from 'react';

const AppLogo = () => {
  const logo = require('../assets/images/logo.png');

  return (
    <div className="app-logo">
      <img src={logo} alt="komenci" />
    </div>
  );
};

export default AppLogo;
