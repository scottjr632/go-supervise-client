import React from 'react'
import { login } from '../../api'
import { useUserProvider, UserActions } from '~providers/userProvider'

const Error = ({ error }) => {
    if (error && error !== '')
        return <div className="error">{error}</div>
    else
        return <></>
}

const LoginForm = () => {
    const { state, dispatch } = useUserProvider()
    const { username, password , err} = state

    const loginUser = () => {
        login({ username, password }).then(res => {
            if (res.statusText === 'OK') {
                dispatch({ type: UserActions.LOGIN })
            }
        }).catch(() => dispatch({ type: UserActions.ERR_LOGIN, payload: 'Username or password is incorrect' }))
    }

    return (
        <div className="login-form shadow-z-1">
            <div className="left">
                <h2 className="center">
          Go Supervisor
                </h2>
            </div>
            <div className="right">
                <div className="center">
                    <Error error={err} />
                    <div className="login-input">
                        <input type="text" name="email" id="email" onChange={e => 
                            dispatch({ type: UserActions.SET_USERNAME, payload: e.currentTarget.value })
                        }
                        value={username}
                        />
                        <label htmlFor="text" className={username === '' ? '' : 'hovered'}>Username</label>
                    </div>
                    <div className="login-input">
                        <input type="password" name="password" id="password" onChange={e => 
                            dispatch({ type: UserActions.SET_PASSWORD, payload: e.currentTarget.value })
                        }
                        value={password}
                        />
                        <label htmlFor="password" className={password === '' ? '' : 'hovered'}>Password</label>
                    </div>
                    <div className="login-input-button">
                        <button type="submit" onClick={loginUser}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm