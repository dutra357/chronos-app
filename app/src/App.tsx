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

            <InputDefault
              id='input'
              type='text'
              labelText='LabelText'
              placeholder='Digite algo'
            />
          </div>

          <div className='formControl'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formControl'>
            <Cycle />
          </div>

          <div className='formControl'>
            <DefaultButton color='green' icon={<PlayCircleIcon />} />
          </div>

          <div className='formControl'>
            <Footer />
          </div>

        </form>
      </Container>

    </>
  )
}

export default App
