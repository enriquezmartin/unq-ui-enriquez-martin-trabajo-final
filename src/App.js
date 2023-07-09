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
          <Route path='/' element={<Home/>}/>
          <Route path='/jugar' element={<Game/>}/>
          <Route path='/configurar' element={<Settings/>}/>
          <Route path='/reglas' element={<Rules/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App