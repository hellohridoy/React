import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (

        <div>
          <h1 id="display">{count}</h1>
          <div>
             <button id="button" onClick={ () => setCount(count+1)}>Increment</button>
          </div>
        </div>
    
  )
}

export default App
