import React from 'react'
import SelectMenu from '../molecules/SelectMenu'
import './pageStyles/Game.css'

const Game = () => {
  return (
    <div className='gameContainer'>
      <h1>Jugar</h1>
      <SelectMenu/>
    </div>
  )
}

export default Game