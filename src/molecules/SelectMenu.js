import React, { useRef, useState } from 'react'
import SelectItem from '../atoms/SelectItem'
import './molecStyles/SelectMenu.css'

const SelectMenu = () => {
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
    const [p1Name, setP1Name] = useState("Jugador 1");
    const [p2Name, setP2Name] = useState("COM");
    const [isGameOver, setIsGameOver] = useState(false);
    const [selectedPlay,setSelectedPlay] = useState(null);
    const [selected2pPlay,setSelected2pPlay] = useState(null);
    const comPlay = () =>{
        const play = Math.floor(Math.random()*5 % 5);
        setSelected2pPlay(play);
        //refComPlay.current.innerHTML = "La COM elige: " + names[play];
    }
    const actualizarP1 = (num)=>{
        setSelectedPlay(num);
        //refPlayer.current.innerHTML = "El jugador 1 elige: "+ names[num];
        comPlay();
    }
    //Si le pasaba el parámetro no me funcionaba.
    const setPlay = (play) => {
        if(!isGameOver) {
            setSelectedPlay(play);
            actualizarP1(play);
        }
    }
    const setRock = () => {setPlay(0);}
    const setPaper = () => {setPlay(1);}
    const setScissors = () => {setPlay(2);;}
    const setSpock = () => {setPlay(3);;}
    const setLizard = () => {setPlay(4);}
    
    const calculateWinner = (play1, play2) =>{
        const p1 = play1+1; 
        const p2 = play2+1;
        //Algoritmo que usa el orden rock, paper, scissors, spock, lizard. (1 al 5)
        if (p1 === p2) 
            return 0;
        //Si eligen lo mismo, es empate
        const diff = Math.abs(p1-p2);
        if ((diff % 2) === 0){
            //Si la diferencia es par, gana el mas chico.
            if (p1 < p2){
                return 1;
            }
        } else {
            //Si la diferencia es impar, gana el mayor.
            if (p1>p2){
                return 1;
            }
        }
        return 2;
    }
    
    const showResult = () => {
        if (selectedPlay==null || selectedPlay == undefined){
            refResult.current.innerHTML = "Debes elegir una opción!"
        } else {
            const wins = calculateWinner(selectedPlay,selected2pPlay);
            refPlayer.current.innerHTML = "J1 elige: " + names[selectedPlay];
            refComPlay.current.innerHTML = "COM elige: " + names[selected2pPlay];
            refResult.current.innerHTML = (wins === 0 ? 
                "Empate!" :
                ("Gana: " + (wins === 1 ? "Jugador 1" : "Jugador 2")));
            setIsGameOver(true);
        }
    }
    const hideResult = () => {
        refResult.current.innerHTML = "";
        refPlayer.current.innerHTML = "";
        refComPlay.current.innerHTML = "";
        setIsGameOver(false);
        setSelected2pPlay(null);
        setSelectedPlay(null);
    }
    const menuItems = [
        <SelectItem play={0} set={setRock}/>,
        <SelectItem play={1} set={setPaper}/>,
        <SelectItem play={2} set={setScissors}/>,
        <SelectItem play={3} set={setSpock}/>,
        <SelectItem play={4} set={setLizard}/>
    ];

  return (
    <>
        <div className='selectorContainer'>    
            {menuItems}  
            {isGameOver?
            <button onClick={hideResult}>Jugar de nuevo</button>:
            <button onClick={showResult}>Elegir!</button> }
        <div className='results'>
            <div ref={refPlayer}> </div>
            <div ref={refComPlay}> </div>
            <div ref={refResult}> </div>
        </div>
        </div>
    </>
  )
}

export default SelectMenu