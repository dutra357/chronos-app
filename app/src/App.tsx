import './styles/global.css'
import './styles/theme.css'

import { Heading } from './components/Heading'

function App() {

  return (
    <>
      <section>
        <Heading attr1={123}>Olá mundo1!</Heading>
        <Heading attr2='String Normal'>Olá mundo2!</Heading>
        <Heading>Olá mundo3!</Heading>
        <p>meu primeiro parágrafo.</p>
      </section>
    </>
  )
}

export default App
