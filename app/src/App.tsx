import './styles/global.css'
import './styles/theme.css'

import { Menu } from './components/menu/Menu';
import { Container } from './components/container/Container';
import { Logo } from './components/logo/Logo';
import { Count } from './components/count/Count';


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
        <form className='form' action="">
          <div className='formControl'>
            <label htmlFor='input'>task</label>
            <input type='text' id='input' />
          </div>

          <div className='formControl'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formControl'>
            <p>Ciclos</p>
            <p> 0 0 0 0 0 0 0</p>
          </div>

          <div className='formControl'>
            <button>enviar</button>
          </div>
        </form>
      </Container>

    </>
  )
}

export default App
