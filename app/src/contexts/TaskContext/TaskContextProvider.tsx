import { useEffect, useMemo, useReducer } from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReduce";
import { TimerWorkerManager } from "../../workers/TimeWorkerManager";
import { TaskActionTypes } from "./TaskActionsTypes";


type TypeContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TypeContextProviderProps) {
    
    const [state, dispatchAction] = useReducer(TaskReducer, initialTaskState);
    
    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(event => {
        const counterSeconds = event.data;

        dispatchAction({ type: TaskActionTypes.COUNT_DOWN, payload: { secondsRemaining: counterSeconds } });

        if (counterSeconds <= 0) {
            console.log("Worker COMPLETED!");
            worker.terminate();
        };
    });

    //Monitorar um estado em tempo real
    useEffect(() => {
        if (!state.activeTask) {
            console.log("Worker terminado por inatividade!");
            worker.terminate();
        }

        worker.postMessage(state);
    }, [worker, state]);

    return (
        <TaskContext.Provider value={{ state, dispatchAction }}>
            {children}
        </TaskContext.Provider>
    )
}