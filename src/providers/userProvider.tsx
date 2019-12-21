import React, { useReducer, useContext, FC } from 'react'
import { UserState as State, ReducerAction, ProviderReducer } from './interfaces'

export enum UserActions {
  LOGIN,
  LOGOUT,
  ERR_LOGIN,
  SET_USERNAME,
  SET_PASSWORD
}

const initialState: State = {
  username: '',
  password: '',
  authenticated: false,
  fistName: '',
  lastName: '',
  role: 'user',
  err: ''
}

const reducer = (state: State, action: ReducerAction<UserActions>) => {
  switch (action.type) {
  case UserActions.LOGIN:
    return {
      ...state,
      authenticated: true,
      password: '',
    }
  case UserActions.LOGOUT:
    return {
      ...state,
      authenticated: false,
      firstName: '',
      lastName: '',
    }
  case UserActions.SET_PASSWORD:
    return {
      ...state,
      password: action.payload
    }
  case UserActions.SET_USERNAME:
    return {
      ...state,
      username: action.payload
    }
  case UserActions.ERR_LOGIN:
    return {
      ...state,
      err: action.payload
    }
  default:
    return state
  }
}

const UserContext = React.createContext<ProviderReducer<State, UserActions> | null>(null)
const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider
export const useUserProvider = () => useContext(UserContext)