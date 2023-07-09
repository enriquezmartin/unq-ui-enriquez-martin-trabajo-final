import React, { useContext, useRef } from 'react'
import './pageStyles/Home.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import '../atoms/Styles/Button.css'


const Home = () => {
  const {config,setConfig} = useContext(UserContext);
  const name1Ref = useRef();
 
  const updateP1Name = ()=> {
    const name = name1Ref.current.value ? name1Ref.current.value : config.player1Name;
    setConfig( config => ({
      ...config,
      player1Name: name
    }))
  };

  return (
    <div className='homeContainer'> 
        <h1 className='bigTitle'>Piedra, Papel, Tijeras, Spock, Lagarto</h1>
        <h2 className='subtitle'>{"Ingrese nombre del jugador: "}</h2>
        <input ref={name1Ref} type='text' placeholder='Ingrese nombre...'/>
        <div>
            <Link className='myButton' to = "/jugar" onClick={updateP1Name}>
            Jugar!
            </Link>
        </div>
    </div>
  )
}

export default Home