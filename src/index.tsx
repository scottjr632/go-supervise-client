import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import LoginPage from '~pages/login'

import './index.css'

import axios from 'axios'
import UserProvider, { useUserProvider, UserActions } from '~providers/userProvider'
import Dashboard from './pages/dashboard'
import { checkAuthentication } from '~api'

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:11223'
    axios.defaults.withCredentials = true
}

const AuthWrapper = () => {
    const { state, dispatch } = useUserProvider()

    useEffect(() => {
        checkAuthentication().then(res => {
            if (res.statusText === 'OK') {
                dispatch({ type: UserActions.LOGIN, payload: '' })
            }
        })
    }, [])

    return useMemo(() => {
        if (state.authenticated) {
            console.log({ auth: state.authenticated })
            return <Dashboard />
        }

        return <LoginPage />
    }, [state.authenticated])
}

const App = () => (
    <UserProvider>
        <AuthWrapper />
    </UserProvider>
)

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)