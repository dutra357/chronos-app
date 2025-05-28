export type TaskModel = {
    id: string;
    title: string;
    duration: number;

    startedAt: number;
    completedAt: number | null;
    interruptedAt: number | null;

    type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
}