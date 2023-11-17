import React from 'react';

import friba from "../images/lataa.png";
import daihatsu from "../images/Daihatsu.png";
import hindenburg from "../images/hindenburg.jpg";
import concrete from "../images/concrete_floor.jpg";


export default function Section2() {
  return (
    <div className='Section2'>
      <h2 className='Section-header'>Some random <span className='Italic'>header</span> here to make this look bit more intresting...</h2>
      <div className='Section2-image-box'>
        <img id='Section2-image1' src={friba} alt='something went wrong'></img>
        <img id='Section2-image2' src={daihatsu} alt='something went wrong'></img>
        <img id='Section2-image3' src={hindenburg} alt='something went wrong'></img>
        <img id='Section2-image4' src={concrete} alt='something went wrong'></img>
      </div>
    </div>
  )
}
