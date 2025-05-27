import styles from './InputDefault.module.css';

type defaultProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function InputDefault({type, id, labelText, ...rest}: defaultProps) {
    return (
        <>
            { labelText && (<label htmlFor={id}> {labelText} </label>) }
            <input className={styles.input} type={type} id={id} {...rest}/>

        </>
    );
}