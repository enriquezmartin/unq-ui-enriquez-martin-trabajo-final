import React from 'react'
import { NavLink } from 'react-router-dom'
import './molecStyles/Nav.css'

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
        <NavLink className= {
            ({isActive} ) => (isActive ? "activo" : "inactivo")
        } to="/reglas">Reglas</NavLink>
    </nav>

  )
}

export default Nav