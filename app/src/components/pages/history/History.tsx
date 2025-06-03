import { Container } from '../../container/Container';
import { MainTemplate } from '../../../templates/MainTemplate/MainTemplate';
import { Heading } from '../../heading/Heading';
import { DefaultButton } from '../../button/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './History.module.css';
import { useTaskContext } from '../../../contexts/TaskContext/UseTaskContext';


export function History() {

    const {state} = useTaskContext();

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
                            {state.tasks.map((task) => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration} min</td>
                                        <td>{new Date(task.startedAt).toISOString()}</td>
                                        <td>{task.interruptedAt}</td>
                                        <td>{task.type}</td>
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