import style from './NotFound.css'

import { Container } from '../../components/container/Container';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

export function NotFound() {

    return (
        <MainTemplate>

            <Container>
                <h1>404 - Not Found</h1>
                <p>ERRO ao carregar página!</p>
            </Container>

        </MainTemplate>
    )
}