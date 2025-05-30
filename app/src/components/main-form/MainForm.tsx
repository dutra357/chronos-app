import { InputDefault } from '../input/InputDefault';
import { DefaultButton } from '../button/DefaultButton';
import { Cycle } from '../cycle/Cycle';
import { PlayCircleIcon, StopCircle, StopCircleIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/GetNexCycle';
import { getNextCycleType } from '../../utils/GetNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {

  const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();

  //Ciclos
  const nextCyclo = getNextCycle(state.currentCycle);
  const nextCycloType = getNextCycleType(nextCyclo);

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
      duration: state.config[nextCycloType],
      type: nextCycloType
    }

    const timeRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCyclo,
        secondsRemaining: timeRemaining,
        formattedSecondsRemainig: formatSecondsToMinutes(timeRemaining),
        tasks: [...prevState.tasks, newTask]
      }
    });
  }


  function handleStopTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemainig: '00:00',
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return {
              ...task,
              interruptedAt: Date.now()
            }
          }
          return task;
        })
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
          disabled={!!state.activeTask}

          ref={taskNameInput}
        // Forma CONTROLADA do input, renderiza novamente
        // value={taskName}
        // onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className='formControl'>
        <p>O próximo intervalo é de 25min.</p>
      </div>

      {state.currentCycle > 0 && (

        <div className='formControl'>
          <Cycle />
        </div>

      )}

      <div className='formControl'>

        {!state.activeTask ?
          (
            <DefaultButton
              key='startTask'
              aria-label='Iniciar nova tarefa'
              title='Iniciar nova tarefa'
              type='submit' color='green'
              icon={<PlayCircleIcon />} />
          ) : (
            <DefaultButton
              key='stopTask'
              aria-label='Interroper tarefa corrente'
              title='Interroper tarefa corrente'
              type='button' color='red'
              icon={<StopCircleIcon />} onClick={handleStopTask} />
          )}

      </div>

    </form>

  )
}
