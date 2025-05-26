import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/global.css'
import './styles/theme.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h1>Olá mundo!</h1>
        <p>meu primeiro parágrafo.</p>
      </section>
    </>
  )
}

export default App
