import React, {useContext, useRef} from 'react'
import './pageStyles/Settings.css'
import { UserContext } from '../contexts/UserContext'
import Button from '../atoms/Button'
const Settings = () => {
  const {config, setConfig} = useContext(UserContext);
  const name1Ref = useRef();
  const updateP1Name = ()=> {
    setConfig( config => ({
      ...config,
      player1Name: name1Ref.current.value
    }))
  };
  const resetScore = ()=> {
    setConfig( config => ({
      ...config,
      player1Score: 0,
      player2Score: 0
    }))
  };
  
  return (
    <div className='settingsContainer'>
      <h1>Configuración</h1>
      <p>Jugador 1: {config.player1Name}</p>
      <p>Editar nombre de jugador: </p> 
      <input ref={name1Ref} type='text' value={config.player1Name} onChange={updateP1Name}/>
      <p>Borrar puntajes</p> <Button text={"Borrar"} handleClick={resetScore}/>
    </div>
  )
}

export default Settings