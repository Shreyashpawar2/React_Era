import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)

  const addValue=()=>{
    counter=counter+1;
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    setCounter((preCounter)=>preCounter+1);
    setCounter((preCounter)=>preCounter+1);
    setCounter((preCounter)=>preCounter+1);
  };

  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter);
};


  return (
<>

 <h1>chai or react</h1>
 <h2>Countervalue:{counter}</h2>

 <button 
 onClick={addValue}
 >Add Value {counter}</button>
 <br/>
 <button
 onClick={removeValue}
 >remove Value {counter} </button>

 </> 
  )
}

export default App
