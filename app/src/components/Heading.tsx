import styles from './Heading.module.css'

export function Heading() {

    const headingStyle = styles.heading;

    return (
        <>
            <div className={headingStyle}>
                <h1>Olá mundo!</h1>
            </div>
        </>
    )
}