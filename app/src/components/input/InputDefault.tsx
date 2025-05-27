import styles from './InputDefault.module.css';

type defaultProps = {
    id: string;
} & React.ComponentProps<'input'>;

export function InputDefault(prop: defaultProps) {
    return (
        <>

            <label htmlFor={prop.id}>task</label>
            <input type={prop.type} id={prop.id} />

        </>
    );
}