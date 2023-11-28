import React from 'react'
import Logo from '../images/Logo.png'

function Footer() {
  return (
    <div className="Foot-main">
      {/* <img src={Logo} alt='logo' /> */}
      <h3 className='Foot-header'>Web Page</h3>
      <ul className='Foot-list'>
        <li>Email</li>
        <li>Contact</li>
        <li>Review</li>
      </ul>
    </div>
  )
}

export default Footer