import React from 'react'
import {FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard,FaHandSpock } from 'react-icons/fa'
import './Styles/SelectItem.css'

const SelectItem = ({play, set}) => {
    const icons = [
        <FaHandRock/>,
        <FaHandPaper/>,
        <FaHandScissors/>,
        <FaHandSpock/>,
        <FaHandLizard/>
    ];
    const names = [
        "Piedra",
        "Papel",
        "Tijera",
        "Spock",
        "Lagarto"
    ];
  return (
    <div onClick={set} className='item'>
        {icons[play]} <div>{names[play]}</div>
    </div>
  )
}

export default SelectItem