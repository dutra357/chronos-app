import { useEffect, useMemo, useReducer } from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReduce";
import { TimerWorkerManager } from "../../workers/TimeWorkerManager";


type TypeContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TypeContextProviderProps) {
    
    const [state, dispatchAction] = useReducer(TaskReducer, initialTaskState);
    
    const worker = useMemo(() => TimerWorkerManager.getInstance(), []);

    worker.onmessage(event => {
        console.log(event.data);
    });

    //Monitorar um estado em tempo real
    useEffect(() => {
        if (!state.activeTask) {
            console.log("Worker terminado por falta de task!");
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