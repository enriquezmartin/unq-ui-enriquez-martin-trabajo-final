import React from 'react'
import SelectItem from '../atoms/SelectItem'
import './molecStyles/SelectMenu.css'

const SelectMenu = ({setPlay}) => {
    const names = [
        "Piedra",
        "Papel",
        "Tijera",
        "Spock",
        "Lagarto"
    ];

    //Si le pasaba el parámetro no me funcionaba.
    const setRock = () => {setPlay(0);}
    const setPaper = () => {setPlay(1);}
    const setScissors = () => {setPlay(2);;}
    const setSpock = () => {setPlay(3);;}
    const setLizard = () => {setPlay(4);}
    
    
    const menuItems = [
        <SelectItem play={0} set={setRock}/>,
        <SelectItem play={1} set={setPaper}/>,
        <SelectItem play={2} set={setScissors}/>,
        <SelectItem play={3} set={setSpock}/>,
        <SelectItem play={4} set={setLizard}/>
    ];

  return (
    <div className='selector'>
        {menuItems}
    </div>
  )
}

export default SelectMenu