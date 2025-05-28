import { InputDefault } from '../input/InputDefault';
import { DefaultButton } from '../button/DefaultButton';
import { Cycle } from '../cycle/Cycle';
import { PlayCircleIcon } from 'lucide-react';
import { useRef, useState } from 'react';


export function MainForm() {

  const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);


  function handleStartNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(taskNameInput.current?.value)
  }

  return (

            <form onSubmit={handleStartNewTask} className='form' action="">

              <div className='formControl'>
                <InputDefault
                  id='input'
                  type='text'
                  labelText='LabelText'
                  placeholder='Digite algo'

                  ref={taskNameInput}
                  // Forma CONTROLADA do input, renderiza novamente
                  // value={taskName}
                  // onChange={(e) => setTaskName(e.target.value)}
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
              
            </form>
            
  )
}