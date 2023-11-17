import React from 'react'
import Logo from '../images/Logo.png'

function Footer() {
  return (
    <div className="Foot-main">
      <h3 className='Foot-header'>Web Page</h3>
      <img src={Logo} alt='logo' />
      <ul className='Foot-list'>
        <li>Email</li>
        <li>Company</li>
        <li>Review</li>
      </ul>
    </div>
  )
}

export default Footer