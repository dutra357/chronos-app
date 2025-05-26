import './styles/global.css'
import './styles/theme.css'

import { Menu } from './components/menu/Menu';
import { Container } from './components/container/Container';
import { Logo } from './components/logo/Logo';


function App() {

  return (
    <>
      <Container>
          <Logo />
      </Container>

      <Container>
        <Menu/>
      </Container>

    </>
  )
}

export default App
