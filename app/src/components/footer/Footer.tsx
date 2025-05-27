import styles from './Footer.module.css';

export function Footer() {
    return (

        <footer className={styles.footer}>

                Made with ❤️ by{' '}

                <a href="https://brasilescola.uol.com.br/dicas-de-estudo/tecnica-pomodoro-que-e-e-como-funciona.htm" target="_blank">
                    Leia mais sobre a técnica pomodoro.
                </a>

                <a href="#" target="_blank">
                    Pomodoro-app &copy; { new Date().getFullYear() }
                </a>

        </footer>

    );
}
