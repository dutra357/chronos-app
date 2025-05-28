import { InputDefault } from '../input/InputDefault';
import { DefaultButton } from '../button/DefaultButton';
import { Cycle } from '../cycle/Cycle';
import { PlayCircleIcon } from 'lucide-react';


export function MainForm() {
  return (

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
              
            </form>
            
  )
}