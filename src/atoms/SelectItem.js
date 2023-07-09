import React from 'react'
import {FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard,FaHandSpock } from 'react-icons/fa'
import './Styles/SelectItem.css'
import im_rock from '../images/rock.png'
import im_paper from '../images/paper.png'
import im_scissors from '../images/scissors.png'
import im_spock from '../images/spock.png'
import im_lizard from '../images/lizard.png'

const SelectItem = ({play, set}) => {
    const ims = [
      im_rock,
      im_paper,
      im_scissors,
      im_spock,
      im_lizard
    ];
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
      <img className='select' src = {ims[play]} alt={"PlayLogo"}/>
    </div>
  )
}
 //     {icons[play]} <div>{names[play]}</div>
export default SelectItem