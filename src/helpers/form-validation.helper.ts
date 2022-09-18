import { RegisterInterface, LoginInterface } from '../types';



export const formRegisterValidation = (register: RegisterInterface) => {
    const RegisterErrorMessage = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

    console.log(register)
}


export const formLoginValidation = (login: LoginInterface) => {
    const LoginErrorMessage = {
        email: '',
        password: '',
    }
    
    console.log(login)
}