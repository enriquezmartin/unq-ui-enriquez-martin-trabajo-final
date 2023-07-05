import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import ErrorPage from './pages/ErrorPage'
import Settings from './pages/Settings'
import Nav from './molecules/Nav'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jugar' element={<Game/>}/>
        <Route path='/configurar' element={<Settings/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App