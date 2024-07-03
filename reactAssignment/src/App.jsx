import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [show, setShow] = useState(true);
  const [counter,setconter]=useState(0);
  const counterr=useRef(null);
  const [startCounterelemt, setstartCounter] = useState(0);
  const [stopCouter, setstopCouter] = useState(0);
  const [resetCounter, setresetCounter] = useState(0);


  // const startConter=()=>{
  //     setInterval(() => {
  //       console.log(">>");
  //       setstartCounter((startCounterelemt)=>{startCounterelemt+1});
  //     }, 1000);
  // };
  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((setstartCounter) => setstartCounter + 1);
    }, 1000);
  };
  
  const stopCouterfunc=()=>{
    // intervalId=0;
  };
  
  const resetCouterfunc=()=>{
    // intervalId=0;
  };

// https://reactchallenges.live/dashboard/overview
  return (
    <>
    <p>
      Assignment 1:
          Description :
          Implement a button to show/hide the text content
    </p>
      <h3>welcome To react challange</h3>
      <div className="container">

      <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? <h5>Welcome to React Challenges</h5> : null}


      <p>
      Description :
        Implement a Stopwatch/timmer as shown below with start ,stop and reset button.
      </p>
          {setstartCounter}
        <button onClick={startConter}>Start</button>
        <button onClick={stopCouterfunc}>Stop</button>
        <button onClick={resetCouterfunc}>Reset</button>
    </div>
    </>
  )
}

export default App
