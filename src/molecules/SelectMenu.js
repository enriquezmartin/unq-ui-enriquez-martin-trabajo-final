import React, { useRef } from 'react'
import SelectItem from '../atoms/SelectItem'
import { useState } from 'react'

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
    const setRock = () => {setSelectedPlay(0); actualizarP1(0);}
    const setPaper = () => {setSelectedPlay(1); actualizarP1(1);}
    const setScissors = () => {setSelectedPlay(2); actualizarP1(2);}
    const setSpock = () => {setSelectedPlay(3); actualizarP1(3);}
    const setLizard = () => {setSelectedPlay(4); actualizarP1(4);}
    
    const calculateWinner = (play1, play2) =>{
        console.log("A: "+ names[play1] + " vs " + names[play2]);
        play1 ++; play2++;
        //console.log(play1 + " vs " + play2);
        //Algoritmo que usa el orden rock, paper, scissors, spock, lizard. (1 al 5)
        if (play1 == play2) 
            return "Empate";
        //Si eligen lo mismo, es empate
        const diff = Math.abs(play1-play2) ;
        console.log("Dif:" + diff);
        if ((diff % 2) == 0){
            //Si la diferencia es par, gana el mas chico.
            if (play1 < play2){
                return "Gana Jugador 1";
            }
        } else {
            //Si la diferencia es impar, gana el mayor.
            if (play1>play2){
                return "Gana Jugador 1";
            }
        }
        return "Gana Jugador 2";
        }
    
    const showResult = () => {
        refResult.current.innerHTML = calculateWinner(selectedPlay,selected2pPlay);
    }
    const menuItems = [
        <SelectItem play={0} set={setRock}/>,
        <SelectItem play={1} set={setPaper}/>,
        <SelectItem play={2} set={setScissors}/>,
        <SelectItem play={3} set={setSpock}/>,
        <SelectItem play={4} set={setLizard}/>
    ];

  return (
    <div>    
        {menuItems}  <button onClick={showResult}>Elegir!</button>
        <div ref={refPlayer}> </div>
        <div ref={refComPlay}> </div>
        <div ref={refResult}> </div>
    </div>
  )
}

export default SelectMenu