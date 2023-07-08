import React, {useContext, useRef} from 'react'
import './pageStyles/Settings.css'
import { UserContext } from '../contexts/UserContext'
import Button from '../atoms/Button'
import Toggle from 'react-styled-toggle'

const Settings = () => {
  const {config, setConfig} = useContext(UserContext);
  const name1Ref = useRef();
  const name2Ref = useRef();
  const clearTextRef = useRef();
  const updateP1Name = ()=> {
    setConfig( config => ({
      ...config,
      player1Name: name1Ref.current.value
    }))
  };

  const updateP2Name = ()=> {
    setConfig( config => ({
      ...config,
      player2Name: name2Ref.current.value
    }))
  };
  const resetScore = ()=> {
    setConfig( config => ({
      ...config,
      player1Score: 0,
      player2Score: 0
    }))
    clearTextRef.current.style.visibility = "visible";
  };
  const handleChange = () =>{
    setConfig( config => ({
      ...config,
      player2Name: config.vsCom ? "Jugador 2": "COM" ,
      vsCom: !config.vsCom,
    }))
    console.log(config.vsCom)
  }
  return (
    <div className='settingsContainer'>
      <h1>Configuración</h1>
      <p>Jugador 1: {config.player1Name}</p>
      <p>Editar nombre de jugador: </p> 
      <input ref={name1Ref} type='text' 
        value={config.player1Name} onChange={updateP1Name}/>
      <p>Jugador 2: {config.player2Name}</p>
      <p>Editar nombre de jugador: </p> 
      <input ref={name2Ref} type='text' 
        value={config.player2Name} onChange={updateP2Name}/>
      <p>
        <Toggle 
          onChange={handleChange}
          labelLeft='VS COM'
          labelRight='VS PERSONA'/>
      </p>
      <p>Borrar puntajes</p> <Button text={"Borrar"} handleClick={resetScore}/>
      <p style={{ visibility: "hidden" } } ref={clearTextRef}>Borrados</p>
    </div>
  )
}

export default Settings