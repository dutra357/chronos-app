import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/GetNexCycle';
import { getNextCycleType } from '../../utils/GetNextCycleType';
import styles from './Cycle.module.css';

export function Cycle() {

    const {state} = useTaskContext();

    const cycleStep = Array.from({ length: state.currentCycle});

    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descanso longo'
    }

    return (
        
        <div className={styles.cycle}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                
                {cycleStep.map(( _ , index) => {
                    const nexCycle = getNextCycle(index);
                    const nextCycloType = getNextCycleType(nexCycle)
                    return <span
                    key={`${nextCycloType}_${nexCycle}`}
                     className={`${styles.cycleDot} ${styles[nextCycloType]}`}
                    aria-label={`Indicador de ciclo atual: ${cycleDescriptionMap[nextCycloType]}`}
                    title={`Indicador de ciclo atual: ${cycleDescriptionMap[nextCycloType]}`}>
                    </span>
                })}

            </div>
        </div>
    )
}