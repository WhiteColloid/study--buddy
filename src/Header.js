import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>
      <div>Welcome!</div>
      <ul className="menu">
        <li><Link to="/">Student</Link></li>
        <li><Link to="/professor">Professor</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
    </header>
  );
}

export default Header;