import React from 'react'
import ruleImage from '../images/rules.png'
import './pageStyles/Home.css'

const Rules = () => {
  return (
    <div className='homeContainer'>
        <h1 className='bigTitle'>Reglas</h1>
        <img className='errImage' 
        src={ruleImage} alt="404 Error Page"></img>
        <ul className='ruleList'>

            <li>Las flechas salientes de cada jugada indican a cuál le gana.</li>
            <li>Las flechas entrantes a cada jugada indican contra cuál pierde.</li>
        </ul>
    </div>
  )
}

export default Rules