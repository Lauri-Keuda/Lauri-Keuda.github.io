import React, {useState} from 'react'
import Style from "../styles/Switch.css"

export default function Switch() {

  const buttonBodyClicked = {borderColor: '#505050'};
  const buttonInnerClicked = {
    marginLeft: '30px',
    borderColor: '#505050',
    backgroundColor: '#505050'
  };

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className='Switch-body btn' style={isClicked ? buttonBodyClicked : Style} onClick={handleClick}>
      <div className='Switch-inner' style={isClicked ? buttonInnerClicked : Style}>
      </div>
    </div>
  )
}