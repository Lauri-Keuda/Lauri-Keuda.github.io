import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Nav-main">
      <img className="Nav-logo" src={logo} alt='Logo' />
      <h3 className='Nav-header'>My Page</h3>
      <ul className='Nav-list'>
        {/* <li key='1'><Link to="/something">Something</Link></li> */}
        <li key='2'><Link to="/contact">Contact</Link></li>
        <li key='3'><Link to="/">Home</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;