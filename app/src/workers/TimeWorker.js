let isRunning = false;

self.onmessage = function(event) {
    if (isRunning) return;

    isRunning = true;

    const state = event.data;
    const {activeTask, secondRemaining} = state;

    const endDate = activeTask.startDate + secondRemaining * 1000;

    function ticTac() {
        const now = Date.now();
        const secondRemaining = Math.round((endDate - now) / 1000);
        self.postMessage({secondRemaining});

        if (secondRemaining <= 0) {
            clearInterval(intervalId);
            self.postMessage({completed: true});
        }
    }
}