import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="Foot-main">
      {/* <img src={Logo} alt='logo' /> */}
      <h3 className='Foot-header'>My Page</h3>
      <ul className='Foot-list'>
        <li key="1"><Link to="contact">Contact</Link></li>
        <li key="2"><Link to="/">Home</Link></li>
      </ul>
    </div>
  )
}

export default Footer