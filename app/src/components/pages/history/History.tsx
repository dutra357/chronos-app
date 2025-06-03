import { Container } from '../../container/Container';
import { MainTemplate } from '../../../templates/MainTemplate/MainTemplate';
import { Heading } from '../../heading/Heading';
import { DefaultButton } from '../../button/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './History.module.css';
import { useTaskContext } from '../../../contexts/TaskContext/UseTaskContext';
import { formatDate } from '../../../utils/FormatDate';
import { getTaskStatus } from '../../../utils/GetTaskStatus';


export function History() {

    const { state } = useTaskContext();

    const sortedTasks = [...state.tasks]
        .sort((a, b) => b.startedAt - a.startedAt);

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
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortedTasks.map((task) => {
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