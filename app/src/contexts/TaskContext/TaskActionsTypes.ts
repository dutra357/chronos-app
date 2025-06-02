import type { TaskModel } from "../../models/TaskModel"
import type { TaskStateModel } from "../../models/TaskStateModel";

// TaskActionTypes.ts
export const TaskActionTypes = {
    START_TASK: 'START_TASK',
    STOP_TASK: 'STOP_TASK',
    RESET_TASK: 'RESET_TASK',
    COUNT_DOWN: 'COUNT_DOWN',
    COMPLETE_TASK: 'COMPLETE_TASK'
} as const;

export type TaskActionType = typeof TaskActionTypes[keyof typeof TaskActionTypes];

export type TaskActionModel = {
    type: typeof TaskActionTypes.START_TASK;
    payload: TaskModel;
} | {
    type: typeof TaskActionTypes.STOP_TASK;
} | {
    type: typeof TaskActionTypes.RESET_TASK;
} | {
    type: typeof TaskActionTypes.COMPLETE_TASK;
} | {
    type: typeof TaskActionTypes.COUNT_DOWN;
    payload: Pick<TaskStateModel, 'secondsRemaining'>;
}