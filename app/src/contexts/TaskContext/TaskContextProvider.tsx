import { useEffect, useMemo, useReducer, useRef } from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReduce";
import { TimerWorkerManager } from "../../workers/TimeWorkerManager";
import { TaskActionTypes } from "./TaskActionsTypes";
import { loadBeep } from "../../utils/loadBeepSafari";
import type { TaskStateModel } from "../../models/TaskStateModel";


type TypeContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TypeContextProviderProps) {

    const [state, dispatchAction] = useReducer(TaskReducer, initialTaskState, () => {
        const storedState = localStorage.getItem('state');

        if (storedState === null) return initialTaskState;
        const parsedState = JSON.parse(storedState) as TaskStateModel;

        return {
            ...parsedState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemainig: '00:00'
        }
    });
    
    
    const playBeepRef = useRef<() => void | null>(null);
    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(event => {
        const counterSeconds = event.data;

        if (counterSeconds <= 0) {
            if (playBeepRef.current) {
                playBeepRef.current();
                playBeepRef.current = null;
            }

            dispatchAction({ type: TaskActionTypes.COMPLETE_TASK });
        } else {
            dispatchAction(
                {
                    type: TaskActionTypes.COUNT_DOWN,
                    payload: { secondsRemaining: counterSeconds }
                }
            );
        }
    });

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        }

    }, [state.activeTask]);

    //Monitorar um estado em tempo real
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))

        if (!state.activeTask) {
            console.log("Worker terminado por inatividade!");
            worker.terminate();
        }

        document.title = state.activeTask ?
            `${state.formattedSecondsRemainig} - Pomodoro app` : "Pomodoro app";
            
        worker.postMessage(state);
    }, [worker, state]);

    return (
        <TaskContext.Provider value={{ state, dispatchAction }}>
            {children}
        </TaskContext.Provider>
    )
}