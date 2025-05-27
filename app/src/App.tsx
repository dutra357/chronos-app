import './styles/global.css'
import './styles/theme.css'

import { Menu } from './components/menu/Menu';
import { Container } from './components/container/Container';
import { Logo } from './components/logo/Logo';
import { Count } from './components/count/Count';
import { InputDefault } from './components/input/InputDefault';
import { Cycle } from './components/cycle/Cycle';
import { DefaultButton } from './components/button/DefaultButton';
import { Footer } from './components/footer/Footer';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { MainForm } from './components/main-form/MainForm';

function App() {

  return (
    <>
      
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Count />
      </Container>

      <Container>
        <MainForm />
      </Container>

    </>
  )
}

export default App
