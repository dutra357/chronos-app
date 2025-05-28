import './styles/global.css'
import './styles/theme.css'

import { Home } from './components/pages/home/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';



function App() {

  return (

    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
};

export default App
