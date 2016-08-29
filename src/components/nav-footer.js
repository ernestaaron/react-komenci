import React from 'react';
import { Link } from 'react-router';

const NavFooter = () => {
  return (
    <ul className="nav-footer">
      <li>
        <a href="https://google.com?q=privacy" target="_blank">PRIVACY</a>
      </li>
      <li>
        <a href="https://google.com?q=security" target="_blank">SECURITY</a>
      </li>
      <li>
        <Link to="terms-and-conditions">TERMS &amp; CONDITIONS</Link>
      </li>
      <li>
        <a href="https://google.com?q=accessibility" target="_blank">ACCESSIBILITY</a>
      </li>
      <li>
        <Link to="faq">FAQ</Link>
      </li>
    </ul>
  );
};

export default NavFooter;
