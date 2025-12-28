import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTheme } from './context/Themecontext'
function App() {
 
  const { theme, toggleTheme } = useTheme();


  return (
    <>
      <div className={`app ${theme}`}>
      <h1>Theme Context Demo</h1>
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div> 

    </>
  )
}

export default App
