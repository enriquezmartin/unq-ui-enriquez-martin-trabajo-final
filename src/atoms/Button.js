import React from 'react'
import './Styles/Button.css'
import useSound from 'use-sound';
import btnSfx from '../sounds/button.wav'

const Button = ({handleClick, text}) => {
  const [playClickSfx] = useSound(btnSfx);
  const handleAndPlay = () => {
    handleClick();
    playClickSfx();
  } 
  return (
    <button className="myButton" onClick={handleAndPlay}>{text}</button>
  )
}

export default Button