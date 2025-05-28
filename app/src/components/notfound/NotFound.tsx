import style from './NotFound.css'

import { Container } from '../../components/container/Container';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';
import { GenericHtml } from '../generichtml/GenericHtml';

export function NotFound() {

    return (
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <h1>Erro: 404</h1>
                    <h2>Page not found</h2>
                </GenericHtml>
            </Container>
        </MainTemplate>
    )
}