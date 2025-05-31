import type { TaskModel } from "../../models/TaskModel"

// TaskActionTypes.ts
export const TaskActionTypes = {
    START_TASK: 'START_TASK',
    STOP_TASK: 'STOP_TASK',
    RESET_TASK: 'RESET_TASK'
} as const;

export type TaskActionType = typeof TaskActionTypes[keyof typeof TaskActionTypes];

export type TaskActionModel = {
    type: typeof TaskActionTypes.START_TASK;
    payload: TaskModel;
} | {
    type: typeof TaskActionTypes.STOP_TASK;
    payload: TaskModel;
} | {
    type: typeof TaskActionTypes.RESET_TASK;
};