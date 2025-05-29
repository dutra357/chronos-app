import { InputDefault } from '../input/InputDefault';
import { DefaultButton } from '../button/DefaultButton';
import { Cycle } from '../cycle/Cycle';
import { PlayCircleIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';


export function MainForm() {

  const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { setState } = useTaskContext();


  function handleStartNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startedAt: Date.now(),
      completedAt: null,
      interruptedAt: null,
      duration: 1,
      type: 'workTime'
    }

    const timeRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, //Ajustar
        secondsRemaining: timeRemaining,
        formattedSecondsRemainig: "00:00", //Conferir
        tasks: [...prevState.tasks, newTask]
      }
    });


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