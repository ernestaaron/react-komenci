import React from 'react';
import { Link } from 'react-router';

const AppFooterNav = () => {
  return (
    <div>
      <div className="small-4 medium-4 columns align-self-bottom">
        <ul className="nav-footer">
          <li>
            <Link to="terms-and-conditions">TERMS &amp; CONDITIONS</Link>
          </li>
          <li>
            <Link to="faq">FAQ</Link>
          </li>
          <li>
            <Link to="broken-link">EXAMPLE OF BROKEN LINK</Link>
          </li>
        </ul>
      </div>
      <div className="small-4 columns align-self-bottom">
        <ul className="nav-footer">
          <li>
            <a href="https://google.com?q=privacy" target="_blank">[external] PRIVACY</a>
          </li>
          <li>
            <a href="https://google.com?q=security" target="_blank">[external] SECURITY</a>
          </li>
          <li>
            <a href="https://google.com?q=accessibility" target="_blank">[external] ACCESSIBILITY</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppFooterNav;
