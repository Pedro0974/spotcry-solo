import React from "react";
import {
    ContainerLoginPage
} from './Styles/Styles'
import {LoginForm} from '../components/LoginForm/LoginFormComponent'

const LoginPage = () => {

    return (
        <ContainerLoginPage>
            <LoginForm />
        </ContainerLoginPage>
    )
}

export default LoginPage;