import { useState , useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght,setLength]=useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [stringAllowed,setStringAllowed]=useState(false);
  const [Password,setPassword]=useState("");

  //useRef

  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str= "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numberAllowed) str +="0123456789";
     if(stringAllowed) str +="!#$%^*^#~`+/";

    for (let index = 1; index <= lenght; index++) {
     let char= Math.floor(Math.random() *str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);

  },[lenght,numberAllowed,stringAllowed,setPassword]);

 const copyPassoardOnkeyboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(Password);
 },[Password]);

  useEffect(()=>{passwordGenerator()},[lenght,numberAllowed,stringAllowed,setPassword])

  return (
    <>
    <h4>Password Generator</h4>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
    bg-white-600 text-orange-400'>


      <input 
      type='text'
      value={Password}
      placeholder='password'
      readOnly
      ref={passwordRef}
      />

      <button onClick={copyPassoardOnkeyboard}>Copy</button>
      
    
    </div>

    <div>
      <div> 

        <input
        type='range'
        min={6}
        max={100}
        value={lenght}
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}

        />
        <label>Lenght {lenght}</label>

        <input
        type='checkbox'
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{setnumberAllowed((prev)=>!prev)}}
        />
        <label>Numbers</label>

        <input
        type='checkbox'
        defaultChecked={stringAllowed}
        id="numberInput"
        onChange={()=>{setStringAllowed((prev)=>!prev)}}
        />
        <label>Charachters</label>


      </div>
    </div>

    </>
  )
}

export default App
