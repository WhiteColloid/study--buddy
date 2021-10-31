import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>React Login</div>
      <ul className="menu">
        <li><Link to="/">Student</Link></li>
        <li><Link to="/private">Professor</Link></li>
      </ul>
    </header>
  );
}

export default Header;