export function getNextCyle(currentCycle: number) {
    return currentCycle === 0 ? 1 : currentCycle + 1;
}