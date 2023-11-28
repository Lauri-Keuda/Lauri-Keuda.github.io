import React from 'react'
import Switch from './Switch.js'
import { Link } from 'react-router-dom'

function switchVisible(switchVisible){
  if (switchVisible) {
    return <Switch />;
  } else {
    return "";
  }
}

function ContentBox(props) {
  return (
    <div className='CntBox'>
      <img className="CntBox-image" src={require(`../images/${props.cover}`)} alt='something went wrong' />
      <div className='CntBox-text'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div className='CntBox-options'>
          {switchVisible(props.switchVisible)}
          {/* <btn className='CntBox-btn' onClick={handleClick}>Siirry</btn> */}
          <Link className='CntBox-btn' to={props.path}>Siirry</Link>
        </div>
      </div>
    </div>
  )
}
export default ContentBox