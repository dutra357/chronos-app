import styles from './Footer.module.css';
import { Link } from 'react-router';

export function Footer() {
    return (

        <footer className={styles.footer}>

                Made with ❤️ by{' '}

                <Link to="/about-pomodoro" target="_blank">
                    Leia mais sobre a técnica pomodoro.
                </Link>

                <Link to="/" target="_blank">
                    Pomodoro-app &copy; { new Date().getFullYear() }
                </Link>

        </footer>

    );
}
