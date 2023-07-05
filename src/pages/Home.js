import React from 'react'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'


const goPlay = () => {
    
}


const Home = () => {
  return (
    <div>
    <div className='homeContainer'> 
        <h1 className='bigTitle'>Piedra, papel, tijeras, lagarto, spock</h1>
        <h2 className='subtitle'>Ingrese nombre del jugador: </h2>
        <input type='text'></input>
            <Link to = "/jugar">
            Jugar!
            </Link>
    </div>
</div>
  )
}

export default Home