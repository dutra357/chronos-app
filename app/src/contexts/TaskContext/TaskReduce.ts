import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/GetNexCycle";
import { initialTaskState } from "./InitialTaskState";
import { TaskActionTypes, type TaskActionModel } from "./TaskActionsTypes";

export function TaskReducer(state: TaskStateModel, action: TaskActionModel) {

    switch (action.type) {
        case TaskActionTypes.START_TASK:
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60;
            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formattedSecondsRemainig: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask]
            };

        case TaskActionTypes.STOP_TASK:
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemainig: '00:00',
                tasks: state.tasks.map(task => {
                    if (state.activeTask && state.activeTask.id === task.id) {
                        return {
                            ...task,
                            interruptedAt: Date.now(),
                        }
                    }
                    return task;
                })
            };

        case TaskActionTypes.COMPLETE_TASK:
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemainig: '00:00',
                tasks: state.tasks.map(task => {
                    if (state.activeTask && state.activeTask.id === task.id) {
                        return {
                            ...task,
                            completedAt: Date.now(),
                        }
                    }
                    return task;
                })
            };

        case TaskActionTypes.RESET_TASK:
            return { ...initialTaskState };

        case TaskActionTypes.COUNT_DOWN:
            return {
                ...state,
                secondsRemaining: action.payload.secondsRemaining,
                formattedSecondsRemainig: formatSecondsToMinutes(action.payload.secondsRemaining)
            }

        case TaskActionTypes.CHANGE_SETTINGS:
            return { ...state, config: { ...action.payload } };

        default:
            return state;
    }
}