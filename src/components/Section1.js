import React from 'react';
import ContentBox from './ContentBox.js';
import data from '../data.js';

function Section1() {

  const boxes = data.map(item => {
    return <ContentBox {...item}/>
  })

  return (
    <div className='Section1'>
      <h2 className='Section-header'>Some random boxes</h2>
      <div className='Section1-boxes'>
        {boxes}
      </div>
    </div>
  )
}

export default Section1;