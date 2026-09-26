import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [message,setMessage] = useState("")
  async function getMessage(){
    const responce=await fetch("http://localhost:8000/api/hello");
    const data=await responce.json();
    setMessage(data.message)
  }
  return(
    <div>
      <h1>REACT+Fastapi+Docker Compose</h1>
      <button onClick={getMessage}>Получить данные с backend</button>
      <h2>{message}</h2>
    </div>
  )
}

export default App
