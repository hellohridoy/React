import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './component/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><Clock locale="bn-BD"/></div>
  )
}

export default App
