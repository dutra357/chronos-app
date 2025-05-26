import styles from './Menu.module.css';

import { HistoryIcon, HouseIcon, SunIcon, TimerIcon } from 'lucide-react';


export function Menu() {
    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#'><HouseIcon /></a>
            <a className={styles.menuLink} href='#'><HistoryIcon /></a>
            <a className={styles.menuLink} href='#'><HouseIcon /></a>
            <a className={styles.menuLink} href='#'><SunIcon /></a>
        </nav>
    );
}
