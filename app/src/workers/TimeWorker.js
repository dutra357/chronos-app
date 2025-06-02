let isRunning = false;

self.onmessage = function (event) {
    if (isRunning) return;

    isRunning = true;

    const state = event.data;
    const { activeTask, secondsRemaining } = state;

    const endDate = activeTask.startedAt + secondsRemaining * 1000;

    const now = Date.now();
    let counter = Math.ceil((endDate - now) / 1000);
    
    function ticTac() {
        self.postMessage(counter);

        const now = Date.now();
        counter = Math.floor((endDate - now) / 1000);
        setTimeout(ticTac, 1000);
    }

    ticTac();
};