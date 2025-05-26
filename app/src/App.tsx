import './styles/global.css'
import './styles/theme.css'

import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading'

function App() {

  return (
    <>
        <Heading>
          Olá mundo!
          <button><TimerIcon/></button>
        </Heading>


        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Fugit, debitis laboriosam dignissimos id ipsa aut libero eligendi, aliquam dolore
           corporis tenetur similique maiores nobis porro quos ab quaerat aliquid dolorem!</p>
    </>
  )
}

export default App
