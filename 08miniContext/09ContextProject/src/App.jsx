import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setthemeMode] = useState("light");
const lightTheme=()=>{
 setthemeMode("light")
};

const darkTheme=()=>{
  setthemeMode("dark")
 };
 //actual change in theme
 useEffect(() => {
  document.querySelector('html').classList.remove("light","dark");
  document.querySelector('html').classList.add(themeMode);
 }, [themeMode])
 

  return (
    <>
      <h1 className='p-4 bg-pink-600'>Them changer</h1>

<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
             <Card/>
        </div>
    </div>
  </div>
</ThemeProvider>

    </>
  )
}

export default App
