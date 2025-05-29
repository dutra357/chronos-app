import { useEffect, useState } from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";


type TypeContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TypeContextProviderProps) {
    const [state, setState] = useState(initialTaskState);

    //Apenas ilustração.
    //Monitorar um estado em tempo real
    useEffect(() => {
        console.log('state', state);
    }, [state]);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    )
}