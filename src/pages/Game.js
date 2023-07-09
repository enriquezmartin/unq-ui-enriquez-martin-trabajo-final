import React, { useContext, useEffect, useRef, useState } from 'react';
import SelectMenu from '../molecules/SelectMenu';
import Scoreboard from '../molecules/Scoreboard';
import HandBalloon from '../atoms/HandBalloon';
import Button from '../atoms/Button';
import './pageStyles/Game.css';
import { UserContext } from '../contexts/UserContext';


const Game = () => {
    const calculateWinner = (play1, play2) =>{
      //Retorna: 0 si empatan, 1 si gana jugador 1 , 2 si gana jugador2/com
      const p1 = play1+1; 
      const p2 = play2+1;
      //Algoritmo que usa el orden rock, paper, scissors, spock, lizard. (1 al 5)
      if (p1 === p2) return 0;
      //Si eligen lo mismo, es empate
      const diff = Math.abs(p1-p2);
      if ((diff % 2) === 0){
          //Si la diferencia es par, gana el mas chico.
          if (p1 < p2) return 1;
      } else {
          //Si la diferencia es impar, gana el mayor.
          if (p1>p2) return 1;
      }
      return 2;
    }

    const {config, setConfig} = useContext(UserContext);
    const p1Name = config.player1Name;
    const p2Name = config.player2Name;
    const vsCom = config.vsCom;
    const States = {
      P1Select: 0,
      P2Select: 1,
      GameOver: 2
    };
    const MaxStates = 3;
    const names = [
      "Piedra",
      "Papel",
      "Tijera",
      "Spock",
      "Lagarto"
    ];
    const refPlayer1 = useRef();
    const refInfo = useRef();
    const refPlayer2 = useRef();
    const refResetButton = useRef();
    const refTurn = useRef();
    
    const updateP1Score = ()=> {
      setConfig( config => ({
        ...config,
        player1Score: config.player1Score+1
      }))
    };

    const updateP2Score = ()=> {
      setConfig( config => ({
        ...config,
        player2Score: config.player2Score+1
      }))
    };

    const [state, setState] = useState(States.P1Select);
    const [playerTurn, setPlayerTurn] = useState(0); //Player1: 0 , Player2: 1
    const [selectedPlay,setSelectedPlay] = useState(null);
    const [selected2pPlay,setSelected2pPlay] = useState(null);
    
    const comPlay = () =>{
      const play = Math.floor(Math.random()*5 % 5);
      setSelected2pPlay(play);
      setState(States.GameOver);
    }
    
    const playSetter = (play, turn) => {
      if (state !== States.GameOver){
        switch (turn) {
          case 0:
            setSelectedPlay(play);
            turnChange();
            nextState();
            break;
          case 1:
            if(!vsCom) {
              setSelected2pPlay(play);
            }
            turnChange();
            nextState();
          break;
          default:
            console.log("Upss. " + turn);
            break;      
        }
      }
    }

    const turnChange = () =>{
      setPlayerTurn (playerTurn => (playerTurn + 1)%2)
    }

    const nextState = () => {
      setState(state=> (state + 1) % MaxStates)
    }
    
    const showResult = () => {
          const wins = calculateWinner(selectedPlay,selected2pPlay);
          refInfo.current.style.visibility = "visible";
          refPlayer1.current.style.visibility = "visible";
          refPlayer2.current.style.visibility = "visible";
          refTurn.current.style.visibility = "hidden";
          refInfo.current.innerHTML = (wins === 0 ? 
              "¡Empate!" :
              ("Gana: " + (wins === 1 ? p1Name : p2Name)));
          if (wins === 1) updateP1Score();
          if (wins === 2) updateP2Score();
    }

    const hideResult = () => {
      refPlayer1.current.style.visibility = "hidden";
      refPlayer2.current.style.visibility = "hidden";
      refInfo.current.style.visibility = "hidden";
      refResetButton.current.style.visibility = "hidden";
      refTurn.current.style.visibility = "visible";
      setSelected2pPlay(null);
      setSelectedPlay(null);
    }

    useEffect(() => {
      setState(States.P1Select);
      hideResult();
    }, [])

    useEffect(() => {
      /* Maquina de estados. 
      La idea es manejar la jugada acá, cuando cambie
      algún parámetro como ser la elección de cada jugador.*/
      switch (state) {
        case States.P1Select:
          refInfo.current.style.visibility = "visible";
          refInfo.current.innerHTML = "Debe elegir: " + p1Name;
          break;
        case States.P2Select:
          refInfo.current.innerHTML = "Debe elegir: " + p2Name;
          if(vsCom) comPlay();
          break;
        case States.GameOver:
          showResult();
          refResetButton.current.style.visibility="visible";
          break;
        default:
          break;
      }
    }, [selectedPlay, selected2pPlay])
    
    const resetGame = () => {
      setState(States.P1Select);
      setPlayerTurn(0);
      hideResult();
    }
    
  return (
    <>
      <div className='gameContainer'>
      <h1>Jugar</h1>
        <div className='wrapper'>  
          <div ref={refTurn}>Turno del jugador: {playerTurn === 0 ? p1Name : p2Name }
          </div>
          <div className='selectorContainer'>
              <SelectMenu setPlay={playSetter} turn={playerTurn}/>
          </div>
          <div className='scores'>
              <Scoreboard players={[config.player1Name,config.player2Name]} 
              scores={[config.player1Score,config.player2Score]}/>
          </div>
          <div className='plays'>
              <div ref={refPlayer1}> 
                <HandBalloon play={selectedPlay} playNames={names} playerName={config.player1Name}/>   
              </div>
              <div ref={refPlayer2}>
                <HandBalloon play={selected2pPlay} playNames={names} playerName={config.player2Name}/>
              </div>
              <div className='info'>
                <div ref={refInfo}> Gana:  </div>
                <div ref={refResetButton}><Button text={"Jugar de nuevo"} handleClick={resetGame}/> </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game