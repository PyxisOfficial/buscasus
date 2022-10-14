import * as C from './styles';

export function LoginError({error}: any) {
    return(
        <C.LoginErrorText errorText={error}>E-mail ou senha incorretos!</C.LoginErrorText>
    )
}