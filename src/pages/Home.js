import React from 'react'
import './pageStyles/Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='homeContainer'> 
        <h1 className='bigTitle'>Piedra, Papel, Tijeras, Spock, Lagarto</h1>
        <h2 className='subtitle'>{"Ingrese nombre del jugador (NYI): "}</h2>
        <input type='text' placeholder='Ingrese nombre...'/>
        <div>
            <Link className='playButton' to = "/jugar">
            Jugar!
            </Link>
        </div>
    </div>
  )
}

export default Home