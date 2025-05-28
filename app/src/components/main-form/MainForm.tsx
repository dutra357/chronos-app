import { InputDefault } from '../input/InputDefault';
import { DefaultButton } from '../button/DefaultButton';
import { Cycle } from '../cycle/Cycle';
import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';


export function MainForm() {

  const [taskName, setTaskName] = useState('');

  function handleStartNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submit')
  }

  return (

            <form onSubmit={handleStartNewTask} className='form' action="">

              <div className='formControl'>
                <InputDefault
                  id='input'
                  type='text'
                  labelText='LabelText'
                  placeholder='Digite algo'

                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
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