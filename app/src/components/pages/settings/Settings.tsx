import { SaveIcon } from "lucide-react";
import { MainTemplate } from "../../../templates/MainTemplate/MainTemplate";
import { DefaultButton } from "../../button/DefaultButton";
import { Container } from "../../container/Container";
import { Heading } from "../../heading/Heading";
import { InputDefault } from "../../input/InputDefault";
import { useRef } from "react";
import { useTaskContext } from "../../../contexts/TaskContext/UseTaskContext";
import { showMessage } from "../../../adapters/ToastfyAdapter";

export function Settings() {

    const { state } = useTaskContext();

    const errors: string[] = [];

    const workTimeInputRef = useRef<HTMLInputElement | null>(null);
    const shortBreakTimeInputRef = useRef<HTMLInputElement | null>(null);
    const longBreakTimeInputRef = useRef<HTMLInputElement | null>(null);

    function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        showMessage.dismiss();

        const workTime = Number(workTimeInputRef.current?.value);
        const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
        const longBreakTime = Number(longBreakTimeInputRef.current?.value);

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            errors.push('Preencha os campos apenas com números.')
        }

        if (longBreakTime < 1 || longBreakTime > 30) {
            errors.push('O tempo de descanso longo deve estar entre 1 e 30 minutos.')
        }

        if (shortBreakTime < 1 || shortBreakTime > 15) {
            errors.push('O tempo de descanso curto deve estar entre 1 e 15 minutos.');
        }

        if (workTime < 1 || workTime > 20) {
            errors.push('O tempo de foco deve estar entre 1 e 20 minutos.');
        }

        if (errors.length > 0) {
            errors.forEach(error => {
                showMessage.error(error);
            });
            return;
        }
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
                <form action=''
                    className='form'
                    onSubmit={handleSaveSettings}>

                    <div className="formControl">
                        <InputDefault
                            id='workTime'
                            labelText='Tempo de foco'
                            ref={workTimeInputRef}
                            defaultValue={state.config.workTime}
                            type='number' 
                            min='1'
                            max='20'
                            step='1' 
                            maxLength={2} />
                    </div>

                    <div className="formControl">
                        <InputDefault
                            id='shortBreakTime'
                            labelText='Configurar descanso curto'
                            ref={shortBreakTimeInputRef}
                            defaultValue={state.config.shortBreakTime}
                            type='number' 
                            min='1'
                            max='15'
                            step='1' 
                            maxLength={2} />
                    </div>

                    <div className="formControl">
                        <InputDefault
                            id='longBreakTime'
                            labelText='Configurar descanso longo'
                            ref={longBreakTimeInputRef}
                            defaultValue={state.config.longBreakTime}
                            type='number' 
                            min='1'
                            max='30'
                            step='1' 
                            maxLength={2} />
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
