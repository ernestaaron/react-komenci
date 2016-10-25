import React from 'react';
import { Link } from 'react-router';

const NavFooter = () => {
  return (
    <footer className="row">
      <div className="small-4 columns">
      	<div className="property-info">
          <h2><a href="https://gitlab.com/abreu.marcos/react-komenci" title="React Komenci">React Komenci</a></h2>
          <p>ReactJS starter kit wrapping the minimum number of dependencies needed to build real world applications. The project comes configured with many dev dependencies to help you develop your application.</p>
      	</div>
      </div>
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
    </footer>
  );
};

export default NavFooter;
