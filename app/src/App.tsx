import './styles/global.css'
import './styles/theme.css'

import { Home } from './components/pages/home/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/msg-container/MessagesContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NotFound } from './components/notfound/NotFound';
import { About } from './components/about/About';


function App() {

  return (

    <TaskContextProvider>
      <MessagesContainer>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about-pomodoro' element={ <About /> } />

            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </BrowserRouter>

      </MessagesContainer>
    </TaskContextProvider>
  )
};

export default App
