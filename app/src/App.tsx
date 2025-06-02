import './styles/global.css'
import './styles/theme.css'

import { Home } from './components/pages/home/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { ToastContainer, Bounce } from 'react-toastify';


function App() {

  return (

    <TaskContextProvider>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Home />
    </TaskContextProvider>
  )
};

export default App
