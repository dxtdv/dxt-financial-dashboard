import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'


//this component is used by: ../pages/UserLoginPage.js
export default function Login() {

    const navigate = useNavigate()

    const [isRegistration, setIsRegistration] = useState(false)

    const { signIn, signUp } = useContext(AuthContext)
    const [loginMessage, setLoginMessage] = useState('')

    const handlerSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const authData = {
            email, password
        }

        if (isRegistration) {
            signUp(authData);
            navigate("/login")
        } else {
            signIn(authData);
            navigate("/myaccount")
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handlerSubmit}
            sx={{
                '& > :not(style)': {
                    m: 1, width: '400px',
                    display: 'flex', flexDirection: 'column',
                },
            }}
            // noValidate
            autoComplete="off"
        >
            <Box
                component="h1"
                sx={{
                    width: '20ch',
                }}
            >
                {isRegistration ? 'Sign In' : 'Log In'}
            </Box>
            <TextField required type="email" id="email" label="Email" variant="outlined" />
            <TextField required id="password" type="password" label="Password" variant="outlined" />
            {isRegistration && <TextField required id="confirmpassword" label="Confirm Password" variant="outlined" />}
            <Button type="submit" variant="contained">{isRegistration ? "Sign In" : "Log In"}</Button>
            <Button onClick={() => setIsRegistration(!isRegistration)} variant="outlined" >{isRegistration ? "Already registred? Log In" : "Don't have an account? Create one"}</Button>
        </Box>
    )
}
