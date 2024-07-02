import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

 let myobject={
  color:"red"
 }

 let newArr=[1,23,4];

  return (
    <>
    <div className="bg-green-400 ">
      <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
    </div>
    <div class="w-[300px] rounded-md border">
    <Card channel="hello world version-1" someobj={myobject}  someArray={newArr} />
    <Card channel="hello world version-2" />
</div>


    </>
  )
}

export default App
