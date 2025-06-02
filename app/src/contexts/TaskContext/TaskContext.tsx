import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./InitialTaskState";
import type { TaskActionModel } from "./TaskActionsTypes";


type TaskContextProps = {
    state: TaskStateModel;
    dispatchAction: React.Dispatch<TaskActionModel>;
}

const initialContextValue = {
    state: initialTaskState,
    dispatchAction: () => { }
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);