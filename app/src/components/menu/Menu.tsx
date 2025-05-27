import { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';


type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function toggleTheme(event: React.MouseEvent) {
        event.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    // Com array cheio. Sempre que mudar o valor de 'theme'.
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        console.log(theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <h1>{theme}</h1>
            <a className={styles.menuLink}
                href='#' aria-label='Ir para Home' title='Ir para a Home'><HouseIcon /></a>

            <a className={styles.menuLink}
                href='#' aria-label='Ver histórico' title='Ver histórico'><HistoryIcon /></a>

            <a className={styles.menuLink}
                href='#' aria-label='Configurações' title='Configurações'><SettingsIcon /></a>

            <a className={styles.menuLink} onClick={toggleTheme}
                href='#' aria-label='Alterar tema claro/escuro' title='Alterar tema claro/escuro'><SunIcon /></a>
        </nav>
    );
}
