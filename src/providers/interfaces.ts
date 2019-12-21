export interface ReducerAction<T> {
  type: T,
  payload?: any
}

export interface ProviderReducer<T, G> {
  state: T,
  dispatch: React.Dispatch<ReducerAction<G>>
}

export interface UserProvider {
  displayname: string
  connections: Array<any>
  listener: EventSource
}

export interface ErrState {
  err: string
}

export interface AuthState {
  authenticated: boolean
  role: 'admin' | 'user'
}

export interface UserState extends AuthState, ErrState {
  username: string
  fistName: string
  lastName: string
  password: string
}