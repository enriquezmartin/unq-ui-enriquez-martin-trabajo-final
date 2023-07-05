import React from 'react'
import { NavLink } from 'react-router-dom'
import './molecStyles/Nav.css'

//const activado = ({isActive} ) => {(isActive ? "activo" : null)}

const Nav = () => {
  return (
    <nav>
        <NavLink className= {
            ({isActive} ) => (isActive ? "activo" : "inactivo")
        } to="/">Inicio</NavLink>
        <NavLink className= {
            ({isActive} ) => (isActive ? "activo" : "inactivo")
        } to="/jugar">Jugar</NavLink>
        <NavLink className= {
            ({isActive} ) => (isActive ? "activo" : "inactivo")
        } to="/configurar">Configuración</NavLink>
    </nav>

  )
}

export default Nav