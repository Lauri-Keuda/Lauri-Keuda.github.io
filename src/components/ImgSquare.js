import React from 'react';

import friba from "../images/friba.png";
import daihatsu from "../images/Daihatsu.png";
import taysikuu from '../images/täysikuu.jpg';
import concrete from "../images/concrete_floor.jpg";


export default function ImgSquare() {
  return (
    <div className='ImgSquare'>
      <h2 className='Section-header'>Cool image <span className='Italic'>section</span> I made</h2>
      <div className='ImgSquare-image-box'>
        <img id='ImgSquare-image1' src={friba} alt='something went wrong'></img>
        <img id='ImgSquare-image2' src={daihatsu} alt='something went wrong'></img>
        <img id='ImgSquare-image3' src={taysikuu} alt='something went wrong'></img>
        <img id='ImgSquare-image4' src={concrete} alt='something went wrong'></img>
      </div>
    </div>
  )
}
