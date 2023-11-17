import React from 'react'
import Section2 from '../components/Section2'
import gif from "../images/keksi.gif"

function Something() {
  return (
    <div className='Page'>
      <Section2 />
      <img src={gif} alt='this is gif about cookie' height={"300px"}/>
    </div>
  )
}

export default Something