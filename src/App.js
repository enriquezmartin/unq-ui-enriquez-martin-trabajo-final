import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import Settings from './pages/Settings'
import ErrorPage from './pages/ErrorPage'
import Rules from './pages/Rules'
import Nav from './molecules/Nav'
import UserProvider from './contexts/UserProvider'

const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>
        <Nav/>
        <Routes>
          <Route path='/unq-ui-enriquez-martin-trabajo-final/home' element={<Home/>}/>
          <Route path='/unq-ui-enriquez-martin-trabajo-final/jugar' element={<Game/>}/>
          <Route path='/unq-ui-enriquez-martin-trabajo-final/configurar' element={<Settings/>}/>
          <Route path='/unq-ui-enriquez-martin-trabajo-final/reglas' element={<Rules/>}/>
          <Route path='/unq-ui-enriquez-martin-trabajo-final/*' element={<ErrorPage/>}/>
        </Routes>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App