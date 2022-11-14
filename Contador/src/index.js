import React from 'react'
import ReactDOM from 'react-dom'

import { useState } from 'react';
import './App.css';

function App() {

  //se setea el estado contador con un valor inicial de 0
  const [count,setCount] = useState(0);

  //se setea la funcion para actualizar el estado contador al dar en incrementar
  const clickIncrement = () => {
    setCount((prevCount => {
      return(prevCount + 1)
    }))
  }
  
  //se setea la funcion para actualizar el estado contador al dar en decrementar
  const clickDecrement = () => {
    setCount((prevCount => {
      return(prevCount - 1)
    }))
  }

   //se setea la funcion para actualizar el estado contador al dar en reset
  const clickReset = () => {
         setCount(0)
  }

  // se realiza un condicional para verficar si el numero es par o impar
  const isEven = count % 2 === 0;
  const MensajePar = isEven ? "Es par" : "Es impar"
 
  return (
    <>
      <div className='containerCount'>
      <h1>El valor del contador es:</h1>
      <h1>{count}</h1>
      <p>{MensajePar}</p>
      <button onClick={clickIncrement}>Increment</button>
      <button onClick={clickReset}>Reset</button>
      <button onClick={clickDecrement}>decrement</button>
      </div>
    </>
  );
}


ReactDOM.render(<App />, document.getElementById('root'))