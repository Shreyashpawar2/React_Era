import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

// https://reactchallenges.live/dashboard/overview
const [input,setInput]=useState("Test");
const [TaskArray,setTaskArray]=useState([]);

const addtask=(e)=>{
  e.preventDefault();
setTaskArray([...TaskArray,input]);
};

const [value, setvalue] = useState(10);

const setValuer=(value)=>(setvalue(value));
  

  return (
   
    <>
   <h3>Assignment 1:ToDo App </h3>
    
   Add Todays Task: <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
   <button onClick={addtask}>Add </button>

   <div>
   {TaskArray.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
   </div>

   <h3>Assignment2:Create a Progress Bar that should fill based on the input percentage value. </h3>
   <div className="App">
        <h1>Progress bar</h1>
        {/* <ProgressBar width={val} /> */}
        <div
        className="w3-blue"
        style={{ height: '24px', width: value+"%", backgroundColor: 'red' }}
      ></div>

        <form>
          <label >Input Percentage:</label>
          <input type="number" value={value} onChange={(e)=>setValuer(e.target.value)} />
        </form>
      </div>
    </>
  )
}

export default App
