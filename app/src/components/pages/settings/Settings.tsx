import { SaveIcon } from "lucide-react";
import { MainTemplate } from "../../../templates/MainTemplate/MainTemplate";
import { DefaultButton } from "../../button/DefaultButton";
import { Container } from "../../container/Container";
import { Heading } from "../../heading/Heading";
import { InputDefault } from "../../input/InputDefault";

export function Settings() {

    function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('save settings', Date.now);
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>
                    Ajustes para o tempo de foco, descanso curto e longo.
                </p>
            </Container>

            <Container>
                <form action='' className='form' onSubmit={handleSaveSettings}>

                    <div className="formControl">
                        <InputDefault id='workTime' labelText='Tempo de foco' />
                    </div>

                    <div className="formControl">
                        <InputDefault id='shortBreakTime' labelText='Configurar descanso curto' />
                    </div>

                    <div className="formControl">
                        <InputDefault id='longBreakTime' labelText='Configurar descanso longo' />
                    </div>

                    <div className="formControl">
                        <DefaultButton
                            icon={<SaveIcon />}
                            aria-label='Salvar configurações'
                            title='Salvar configurações' />
                    </div>

                </form>
            </Container>
        </MainTemplate>
    );
}   
