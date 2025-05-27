import styles from './Cycle.module.css';

export function Cycle() {
    return (
        
        <div className={styles.cycle}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>

                <span className={styles.cycleDot}></span>
            </div>
        </div>
    )
}