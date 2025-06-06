import type { TaskStateModel } from "../models/TaskStateModel";

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {

    private worker: Worker;

    private constructor() {
        this.worker = new Worker(new URL('./TimeWorker.js', import.meta.url), {
            type: 'module', // para bundlers modernos
        });
    }

    static getInstance(): TimerWorkerManager {
        if (!instance) {
            instance = new TimerWorkerManager();
        }
        return instance;
    }

    postMessage(message: TaskStateModel) {
        this.worker.postMessage(message);
    }

    onmessage(callback: (event: MessageEvent) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        this.worker.terminate();
        instance = null;
    }

}