import React from 'react'

function Person(props) {
  return (
    <div className='Person-box'>
        {/* <img className='Person-img' src={require(`../images/${props.photo}`)} alt='Photo of the person'/> */}
        <div className='Person-img'></div>
        <div className='Person-desc'>
            <h4 className='Person-name'>{props.name}</h4>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    </div>
  )
}

export default Person