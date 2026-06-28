import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './css/App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar />
    
      <div className='conteudo-principal'>
        <main>
          <h1>Bem-vindos à Zênite</h1>
          
        </main>
    </div>
    </>
  )
}

export default App
