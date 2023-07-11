import React from 'react'
import { NavLink } from 'react-router-dom'
import './molecStyles/Nav.css'

const Nav = () => {
  return (
    <nav>
        <NavLink className= {
            ({isActive} ) => (isActive ? "activo" : "inactivo")
        } to="/unq-ui-enriquez-martin-trabajo-final/jugar">Jugar</NavLink>
        <NavLink className= {
            ({isActive} ) => (isActive ? "activo" : "inactivo")
        } to="/unq-ui-enriquez-martin-trabajo-final/configurar">Configuración</NavLink>
        <NavLink className= {
            ({isActive} ) => (isActive ? "activo" : "inactivo")
        } to="/unq-ui-enriquez-martin-trabajo-final/reglas">Reglas</NavLink>
    </nav>
  )
}

export default Nav