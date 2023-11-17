import React from 'react'
import Switch from './Switch.js'

function ContentBox(props) {
  return (
    <div className='CntBox'>
      <img className="CntBox-image" src={require(`../images/${props.cover}`)} alt='something went wrong' />
      <div className='CntBox-text'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div className='CntBox-options'>
          <Switch />
          <btn className='CntBox-btn'>Button</btn>
        </div>
      </div>
    </div>
  )
}

export default ContentBox