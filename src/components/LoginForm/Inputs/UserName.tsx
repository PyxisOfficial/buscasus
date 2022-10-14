import * as C from './styles';

interface UserNameInputProps extends React.HTMLAttributes<HTMLDivElement> {
    errorText: boolean;
}

export function UserNameInput({errorText, ...rest}: UserNameInputProps) {
    return (
        <C.InputIconContainer>
        <C.Input
            errorText={errorText}
            type="text"
            placeholder="Usuário"
            id="userName"
            {...rest}
        />
        <label htmlFor="userName"><C.PersonIcon className="material-symbols-outlined">person</C.PersonIcon></label>
        <C.ErrorText errorText={errorText}>Por favor, insira um nome de usuário.</C.ErrorText>
    </C.InputIconContainer>
    )
}