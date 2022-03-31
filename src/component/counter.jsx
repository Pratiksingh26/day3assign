//import logo from './logo.svg';
//import './App.css';
import React from 'react';

function Counter() {
  const [counter,setCounter] = React.useState(0)

  const handlecounter = (value) => {
    setCounter(counter+value)
  }

  const doublecounter = (value) => {
    setCounter(counter*value)
  }
  const doublecounterd = (value) => {
    setCounter(counter/value)
  }
  return (
   <>
     <h1>Counter</h1>
     <h2>{counter}</h2>
     <button onClick={() => handlecounter(1)}>Increment</button>
     <button onClick={() => handlecounter(-1)}>Decrement</button>
     <button onClick={() => doublecounter(2)}>Double+</button>
     <button onClick={() => doublecounterd(2)}>Double-</button>
     </>
  );
}

export default Counter;
