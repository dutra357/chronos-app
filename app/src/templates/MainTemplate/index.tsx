import './styles/global.css'
import './styles/theme.css'

import { Container } from './components/Container';
import { Logo } from './components/logo/Logo';
import { Menu } from './components/menu/Menu';
import { Count } from './components/count/Count';
import { MainForm } from './components/main-form/MainForm';


export function MainTemplate() {

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
};
