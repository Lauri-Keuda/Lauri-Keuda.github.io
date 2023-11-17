import React from 'react';
import Logo from '../images/Logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Nav-main">
      <img className="Nav-logo" src={Logo} alt='Logo' />
      <h3 className='Nav-header'>Web Page</h3>
      <ul className='Nav-list'>
        <li key='1'><Link to="/something">Something</Link></li>
        <li key='2'><Link to="/contact">Yheystiedot</Link></li>
        <li key='3'><Link to="/kotisivu">Koti</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;