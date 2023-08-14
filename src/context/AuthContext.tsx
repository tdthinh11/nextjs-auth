'use client'
import jwt_decode from 'jwt-decode'
// import { apiClient } from '@nupharma/shared/src/dal/HttpClient'
import { IUser } from '@/models/dbModel/BackEndModels'
import React, { ReactNode, createContext, useContext, useState } from 'react'

interface IAuthContextState {
  accessToken?: string
  refreshToken?: string
  authenticated?: boolean
  user?: IUser
}

interface IAuthContextValue {
  authState: IAuthContextState
  getAccessToken: () => string | undefined
  updateAuthState: (authState: IAuthContextState) => void
  logout: () => void
}

const noAuth = {
  accessToken: undefined,
  refreshToken: undefined,
  authenticated: undefined,
  user: undefined
} as IAuthContextState

interface IAuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContextValue | null>(null)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [authState, setAuthState] = useState<IAuthContextState>(noAuth)

  const jwtUser = (accessToken?: string) => {
    if (accessToken) {
      return jwt_decode(accessToken) as IUser
    }
    return undefined
  }

  const updateAuthState = React.useCallback((auth: IAuthContextState) => {
    if (auth.accessToken) {
      localStorage.setItem(
        'token',
        JSON.stringify({
          accessToken: auth.accessToken,
          refreshToken: auth.refreshToken
        })
      )
      auth.user = jwtUser(auth.accessToken)
      console.log(auth.user)
      setAuthState(auth)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('token')
    setAuthState(noAuth)
  }

  const getAccessToken = () => {
    return authState.accessToken
  }

  return (
    <AuthContext.Provider value={{ authState, getAccessToken, updateAuthState, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
