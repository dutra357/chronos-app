import { useEffect, useReducer } from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReduce";


type TypeContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TypeContextProviderProps) {
    const [state, dispatchAction] = useReducer(TaskReducer, initialTaskState);

    //Apenas ilustração.
    //Monitorar um estado em tempo real
    useEffect(() => {
        console.log('state', state);
    }, [state]);

    return (
        <TaskContext.Provider value={{ state, dispatchAction }}>
            {children}
        </TaskContext.Provider>
    )
}