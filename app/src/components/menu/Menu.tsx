import { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { RouterLink } from '../router-link/RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(
        // Lazy initialization
        () => {
        const storedTheme = localStorage.getItem('theme') as AvailableThemes;
        return storedTheme || 'dark';
    });

    function toggleTheme(event: React.MouseEvent) {
        event.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Cleanup function
        return () => {};
    }, [theme]);

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    };


    return (
        <nav className={styles.menu}>
           
            <RouterLink className={styles.menuLink}
                href='/' aria-label='Ir para Home' title='Ir para a Home'><HouseIcon /></RouterLink>

            <RouterLink className={styles.menuLink}
                href='#' aria-label='Ver histórico' title='Ver histórico'><HistoryIcon /></RouterLink>

            <RouterLink className={styles.menuLink}
                href='#' aria-label='Configurações' title='Configurações'><SettingsIcon /></RouterLink>

            <RouterLink className={styles.menuLink} onClick={toggleTheme}
                href='#' aria-label='Alterar tema claro/escuro'
                 title='Alterar tema claro/escuro'> {nextThemeIcon[theme]} </RouterLink>
        </nav>
    );
}
