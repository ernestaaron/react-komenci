import React from 'react';
import { Link } from 'react-router';

const NavTop = () => {
  return (
    <div className="top-nav expanded row">
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NavTop;