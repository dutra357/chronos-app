import styles from './Footer.module.css';

export function Footer() {
    return (

        <footer className={styles.footer}>

                Made with ❤️ by{' '}

                <a href="#" target="_blank">
                    Leia mais sobre a técnica pomodoro.
                </a>

                <a href="#" target="_blank">
                    Pomodoro-app &copy; { new Date().getFullYear() }
                </a>

        </footer>

    );
}
