import { InputDefault } from '../input/InputDefault';
import { DefaultButton } from '../button/DefaultButton';
import { Cycle } from '../cycle/Cycle';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/GetNexCycle';
import { getNextCycleType } from '../../utils/GetNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActionsTypes';
import { Tips } from '../tips/Tips';
import { TimerWorkerManager } from '../../workers/TimeWorkerManager';
import { showMessage } from '../../adapters/ToastfyAdapter';

export function MainForm() {

  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, dispatchAction } = useTaskContext();
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  //Ciclos
  const nextCyclo = getNextCycle(state.currentCycle);
  const nextCycloType = getNextCycleType(nextCyclo);

  function handleStartNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //Limpar os toasts
    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warning('Digite o nome da tarefa.');
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

    dispatchAction({ type: TaskActionTypes.START_TASK, payload: newTask });

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(() => {
      worker.terminate();
    });
  }


  function handleStopTask() {
    dispatchAction({ type: TaskActionTypes.STOP_TASK });
  }

  return (

    <form onSubmit={handleStartNewTask} className='form' action="">

      <div className='formControl'>
        <InputDefault
          id='input'
          type='text'
          labelText='Label Text'
          placeholder='Digite algo'
          disabled={!!state.activeTask}

          ref={taskNameInput}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='formControl'>
        <Tips nextCycloType={nextCycloType} />
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
