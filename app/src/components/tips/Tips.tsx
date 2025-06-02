import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";

type NextCycleType = 'workTime' | 'shortBreakTime' | 'longBreakTime';

type TipsProps = {
  nextCycloType: NextCycleType;
};

export function Tips({...props}: TipsProps) {

    const { state } = useTaskContext();

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min.</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min.</span>,
        longBreakTime: <span>Descanso longo!</span>
    }

    const tipsForNoActiveTask = {
        workTime: <span>Próximo descanso é de {state.config.workTime}min.</span>,
        shortBreakTime: <span>Próximo ciclo é de {state.config.shortBreakTime}min.</span>,
        longBreakTime: <span>Próximo descanso será <u>longo</u>.</span>
    }

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[props.nextCycloType]}
        </>
    )
}