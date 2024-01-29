import React from 'react';
import ContentBox from './ContentBox.js';
import data from '../data.js';

function Boxrow() {

  const boxes = data.map(item => {
    return <ContentBox {...item}/>
  })

  return (
    <div className='Boxrow'>
      <h2 className='Section-header'>Some random boxes</h2>
      <div className='Boxrow-boxes'>
        {boxes}
      </div>
    </div>
  )
}

export default Boxrow;