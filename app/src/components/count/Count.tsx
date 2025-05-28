import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import styles from './Count.module.css';

export function Count() {

  const { state } = useTaskContext();

  return (

    <div className={styles.count}>
      <span>{state.formattedSecondsRemainig}</span>
    </div>

  );
}