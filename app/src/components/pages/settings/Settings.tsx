import { SaveIcon } from "lucide-react";
import { MainTemplate } from "../../../templates/MainTemplate/MainTemplate";
import { DefaultButton } from "../../button/DefaultButton";
import { Container } from "../../container/Container";
import { Heading } from "../../heading/Heading";
import { InputDefault } from "../../input/InputDefault";
import { useRef } from "react";
import { useTaskContext } from "../../../contexts/TaskContext/UseTaskContext";

export function Settings() {

    const { state } = useTaskContext();

    const workTimeInputRef = useRef<HTMLInputElement | null>(null);
    const shortBreakTimeInputRef = useRef<HTMLInputElement | null>(null);
    const longBreakTimeInputRef = useRef<HTMLInputElement | null>(null);

    function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const workTime = workTimeInputRef.current?.value;
        const shortBreakTime = shortBreakTimeInputRef.current?.value;
        const longBreakTime = longBreakTimeInputRef.current?.value;


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
                        <InputDefault
                            id='workTime'
                            labelText='Tempo de foco'
                            ref={workTimeInputRef}
                            defaultValue={state.config.workTime} />
                    </div>

                    <div className="formControl">
                        <InputDefault
                            id='shortBreakTime'
                            labelText='Configurar descanso curto'
                            ref={shortBreakTimeInputRef}
                            defaultValue={state.config.shortBreakTime} />
                    </div>

                    <div className="formControl">
                        <InputDefault
                            id='longBreakTime'
                            labelText='Configurar descanso longo'
                            ref={longBreakTimeInputRef}
                            defaultValue={state.config.longBreakTime} />
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
