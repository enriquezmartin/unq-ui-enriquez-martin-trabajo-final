import React from 'react'
import im_rock from '../images/rock.png'
import im_paper from '../images/paper.png'
import im_scissors from '../images/scissors.png'
import im_spock from '../images/spock.png'
import im_lizard from '../images/lizard.png'
import './Styles/HandBalloon.css'

const HandBalloon = ({play, playNames, playerName}) => {
  const ims = [
    im_rock,
    im_paper,
    im_scissors,
    im_spock,
    im_lizard
  ];
  return (
    <div className='attackContainer'>
        <img className='playBall' src={ims[play]} alt="Globo de mano" />
        <div>{playNames[play]}</div>
        <div>{playerName}</div>
    </div>
  )
}

export default HandBalloon