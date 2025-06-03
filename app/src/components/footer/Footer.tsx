import styles from './Footer.module.css';
import { RouterLink } from '../router-link/RouterLink';

export function Footer() {
    return (

        <footer className={styles.footer}>

                Made with ❤️ by{'Dutra'}

                <RouterLink href="/about-pomodoro">
                    Leia mais sobre a técnica pomodoro.
                </RouterLink>

                <RouterLink href="/">
                    Pomodoro-app &copy; { new Date().getFullYear() }
                </RouterLink>

        </footer>

    );
}
