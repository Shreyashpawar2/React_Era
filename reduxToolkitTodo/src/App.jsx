import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoes from './components/Todoes'
import AddTodo from './components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Learn About TooLkit</h1>
      <AddTodo/>
      <Todoes />
    </>
  )
}

export default App
