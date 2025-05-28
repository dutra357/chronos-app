import { Count } from '../../count/Count';
import { MainForm } from '../../main-form/MainForm';
import { Container } from '../../container/Container';
import { MainTemplate } from '../../../templates/MainTemplate/MainTemplate';


export function Home() {
    return (
        <MainTemplate>

            <Container>
                <Count />
            </Container>

            <Container>
                <MainForm />
            </Container>
            
        </MainTemplate>
    )
}