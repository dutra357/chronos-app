

import { Container } from '../../components/container/Container';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';
import { GenericHtml } from '../generichtml/GenericHtml';
import { Heading } from '../heading/Heading';

export function NotFound() {

    return (
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <Heading>Erro 404</Heading>
                    <Heading>Page not found</Heading>
                </GenericHtml>
            </Container>
        </MainTemplate>
    )
}