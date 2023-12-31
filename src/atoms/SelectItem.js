import React from 'react'
import './Styles/SelectItem.css'
import im_rock from '../images/rock.png'
import im_paper from '../images/paper.png'
import im_scissors from '../images/scissors.png'
import im_spock from '../images/spock.png'
import im_lizard from '../images/lizard.png'
import {FaHandLizard, FaHandRock, FaHandScissors, FaHandSpock, FaHandPaper} from 'react-icons/fa' 
import useSound from 'use-sound'
import hoverSfx from '../sounds/menu-selection-hover.wav'

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
    const [playHoverSfx, { stopHoverSfx }] = useSound(hoverSfx);

  return (
    <div onClick={set} className='item'>
      <img className='select' src = {ims[play]} alt={"PlayLogo"} 
        onMouseEnter={()=>playHoverSfx()} 
        onMouseLeave={stopHoverSfx}/>
      <div className='subtext'>{icons[play]}{" "+names[play]} </div>
    </div>
  )
}
export default SelectItem