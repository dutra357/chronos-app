import styles from './Heading.module.css'

export function Heading(props: any) {

    const variasStrings = `${styles.back} ${styles.heading}`;
    return (
        <>
            <div className={variasStrings}>
                <h1>{props.children}</h1>
            </div>
        </>
    )
}