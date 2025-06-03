import { Container } from '../../container/Container';
import { MainTemplate } from '../../../templates/MainTemplate/MainTemplate';
import { Heading } from '../../heading/Heading';
import { DefaultButton } from '../../button/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './History.module.css';
import { useTaskContext } from '../../../contexts/TaskContext/UseTaskContext';
import { formatDate } from '../../../utils/FormatDate';
import { getTaskStatus } from '../../../utils/GetTaskStatus';
import { useState } from 'react';
import { sortTasks, type SortTasksOptions } from '../../../utils/SortTasks';


export function History() {

    const { state } = useTaskContext();

    const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            field: 'startedAt',
            direction: 'desc'
        }
    });

    function handleSort({ field }: Pick<SortTasksOptions, 'field'>) {
        const newDirection = sortTaskOptions.direction === 'asc' ? 'desc' : 'asc';

        setSortTaskOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTaskOptions.tasks,
                field: field,
            }),

            field,
            direction: newDirection
        })
    }


    return (
        <MainTemplate>

            <Container>
                <Heading>
                    <span>History</span>

                    <span className={styles.buttonContainer}>
                        <DefaultButton
                            aria-label='Apagar todo o histórico'
                            title='Apagar todo o histórico'
                            icon={<TrashIcon />}
                            color='red' />
                    </span>

                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort({ field: 'name' })}
                                    className={styles.thSort}>Tarefa ↕</th>

                                <th onClick={() => handleSort({ field: 'duration' })}
                                    className={styles.thSort}>Duração ↕</th>

                                <th onClick={() => handleSort({ field: 'startedAt' })}
                                    className={styles.thSort}>Data ↕</th>

                                <th>Status</th>

                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortTaskOptions.tasks.map((task) => {
                                const taskTypeMap = {
                                    workTime: 'Foco',
                                    shortBreakTime: 'Descanso curto',
                                    longBreakTime: 'Descanso longo',
                                }

                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration} min</td>
                                        <td>{formatDate(task.startedAt)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{taskTypeMap[task.type]}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>

        </MainTemplate>
    )
}