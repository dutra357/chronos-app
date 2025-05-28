import style from './GenericHtml.module.css';

type GenericHtmlProps = {
    children: React.ReactNode;
}

export function GenericHtml(props: GenericHtmlProps) {

    return (
        <div className={style.genericHtml}>
            {props.children}
        </div>
    );
}