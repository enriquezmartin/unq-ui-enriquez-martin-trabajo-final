import React from 'react'
import './Styles/Button.css'

const Button = ({handleClick, text}) => {
  return (
    <button className="myButton" onClick={handleClick}>{text}</button>
  )
}

export default Button