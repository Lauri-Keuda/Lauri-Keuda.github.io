import React from 'react'
import ImgSquare from '../components/ImgSquare'
import gif from "../images/keksi.png"

function Something() {
  return (
    <div className='Page'>
      <ImgSquare />
      <img src={gif} alt='this is gif about cookie' height={"300px"}/>
    </div>
  )
}

export default Something