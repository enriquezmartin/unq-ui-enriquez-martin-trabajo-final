import React from 'react'
import SelectItem from '../atoms/SelectItem'
import './molecStyles/SelectMenu.css'

const SelectMenu = ({setPlay, turn}) => {
    const names = [
        "Piedra",
        "Papel",
        "Tijera",
        "Spock",
        "Lagarto"
    ];

    //Si le pasaba el parámetro no me funcionaba.
    const setRock = () => {setPlay(0, turn);}
    const setPaper = () => {setPlay(1, turn);}
    const setScissors = () => {setPlay(2, turn);}
    const setSpock = () => {setPlay(3, turn);}
    const setLizard = () => {setPlay(4, turn);}
    
    
    const menuItems = [
        <SelectItem play={0} key={"it_0"} set={setRock}/>,
        <SelectItem play={1} key={"it_1"} set={setPaper}/>,
        <SelectItem play={2} key={"it_2"} set={setScissors}/>,
        <SelectItem play={3} key={"it_3"} set={setSpock}/>,
        <SelectItem play={4} key={"it_4"} set={setLizard}/>
    ];

  return (
    <div className='selector'>
        {menuItems}
    </div>
  )
}

export default SelectMenu