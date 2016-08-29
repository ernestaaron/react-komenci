import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
  return (
    <div>
      <h1>Whoops! That was unexpected...</h1>
      <p>Lets go back to the <Link to="/">homepage</Link></p>
    </div>
  );
};

export default PageNotFound;
