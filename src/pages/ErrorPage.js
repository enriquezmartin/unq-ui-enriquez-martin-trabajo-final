import React from 'react'
import './pageStyles/Home.css'
import errorImage from '../images/bluewhale.png'

const ErrorPage = () => {
  return (
    <div className='homeContainer'>
      <h1 className='bigTitle'>Error, página no encontrada</h1>
      <img className='errImage' 
      src={errorImage} alt="404 Error Page"></img>
    </div>
  )
}

export default ErrorPage