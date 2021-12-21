import React from 'react'
import { Link } from '@react-navigation/native';
import { LoginForm, GeneralButton } from '../components'
import { PurpleText, GrayText } from '../components/Styled/generals'
import { LoginContainer, TextContainer } from './styled'

export const Login = () => {

    return (
        <LoginContainer>
            <PurpleText>Login</PurpleText>
            <LoginForm />
            <GeneralButton text={'Login'}/>
            <TextContainer>          
                <GrayText>Don't have an account? </GrayText>
                <Link to ={{ screen: 'SignUp' }}>
                    Sign Up
                </Link>
            </TextContainer>
        </LoginContainer>
    )
}

