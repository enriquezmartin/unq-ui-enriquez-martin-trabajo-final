import React, { useContext, useEffect, useRef, useState } from 'react';
import SelectMenu from '../molecules/SelectMenu';
import Scoreboard from '../molecules/Scoreboard';
import HandBalloon from '../atoms/HandBalloon';
import Button from '../atoms/Button';
import './pageStyles/Game.css';
import { UserContext } from '../contexts/UserContext';

const Game = () => {
    const {config, setConfig} = useContext(UserContext);
    const p1Name = config.player1Name;
    const p2Name = config.player2Name;
    const names = [
      "Piedra",
      "Papel",
      "Tijera",
      "Spock",
      "Lagarto"
    ];
    const refPlayer = useRef();
    const refResult = useRef();
    const refComPlay = useRef();
    //const [p1Score, setP1Score] = useState(config.player1Score);
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
    //const [p2Score, setP2Score] = useState(config.player2Score);


    const [isGameOver, setIsGameOver] = useState(false);
    const [selectedPlay,setSelectedPlay] = useState(null);
    const [selected2pPlay,setSelected2pPlay] = useState(null);
    
    const comPlay = () =>{
      const play = Math.floor(Math.random()*5 % 5);
      setSelected2pPlay(play);
    }
    
    const actualizarP1 = (num)=>{
      setSelectedPlay(num);
      comPlay();
    }

    const playSetter = (play) => {
      if(!isGameOver) {
          setSelectedPlay(play);
          actualizarP1(play);
          refPlayer.current.style.visibility = "visible";
          refResult.current.innerHTML = config.player1Name + " ha elegido.";
      }
    }

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

    const showResult = () => {
      if (selectedPlay === null || selectedPlay === undefined){
        refResult.current.style.visibility = "visible";
        refPlayer.current.style.visibility = "hidden";
        refComPlay.current.style.visibility = "hidden";
        refResult.current.innerHTML = "¡Debes elegir una opción!"
      } else {
          const wins = calculateWinner(selectedPlay,selected2pPlay);
          refResult.current.style.visibility = "visible";
          refPlayer.current.style.visibility = "visible";
          refComPlay.current.style.visibility = "visible";
          //refPlayer.current.innerHTML = "J1 elige: " + names[selectedPlay];
          //refComPlay.current.innerHTML = "COM elige: " + names[selected2pPlay];
          refResult.current.innerHTML = (wins === 0 ? 
              "¡Empate!" :
              ("Gana: " + (wins === 1 ? p1Name : p2Name)));
          if (wins === 1) updateP1Score();
            //setP1Score(p1Score => p1Score + 1);
          if (wins === 2) updateP2Score();
          //setP2Score(p2Score => p2Score + 1);
          setIsGameOver(true);
      
      }
    }

    const hideResult = () => {
      refResult.current.style.visibility = "hidden";
      refPlayer.current.style.visibility = "hidden";
      refComPlay.current.style.visibility = "hidden";
      setIsGameOver(false);
      setSelected2pPlay(null);
      setSelectedPlay(null);
    }

    useEffect(() => {
      hideResult();
    }, [])
    
  return (
    <>
      <div className='gameContainer'>
      <h1>Jugar</h1>
        <div className='selectorContainer'>  
          <div className='column'>
              <Scoreboard players={[config.player1Name,config.player2Name]} 
              scores={[config.player1Score,config.player2Score]}/>
          </div>
          <div className='column'>
              <SelectMenu setPlay={playSetter}/>
              {isGameOver ?
              <Button handleClick={hideResult} text={"Jugar de nuevo"}/>:
              <Button handleClick={showResult} text={"Atacar!"}/> }
          </div>
        </div>
        <div className='resultContainer'>
            <div ref={refPlayer}> 
              <HandBalloon play={selectedPlay} playNames={names} playerName={config.player1Name}/>   
            </div>
            <div ref={refComPlay}>
              <HandBalloon play={selected2pPlay} playNames={names} playerName={config.player2Name}/>
            </div>
            <div ref={refResult}> Gana:  </div>
        </div>
      </div>
    </>
  )
}

export default Game