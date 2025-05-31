import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionTypes, type TaskActionModel } from "./TaskActionsTypes";

export function TaskReducer(state: TaskStateModel, action: TaskActionModel) {

    switch (action.type) {
        case TaskActionTypes.START_TASK:
            action.payload
            return state;

        case TaskActionTypes.STOP_TASK:
            action.payload
            return state;

        case TaskActionTypes.RESET_TASK:
            return state;
            
        default:
            return state;
    }

    return state;
}