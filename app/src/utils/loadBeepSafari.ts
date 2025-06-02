import gravitationalBeep from '../../src/assets/audios/gravitational_beep.mp3'

// Arrannjo técnico para o Safari
export function loadBeep() {
    const audio = new Audio(gravitationalBeep);
    audio.load();

    return () => {
        audio.currentTime = 0;
        audio.play();
    }
}