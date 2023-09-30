import React, { createContext, useCallback, useEffect, useState } from 'react'
import { localStorageKeys } from '../config/localStorageKeys'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { usersService } from '../services/usersService'
import { toast } from 'react-hot-toast'
import { LaunchScreen } from '../../view/components/LaunchScreen'
import { User } from '../entities/User'

interface AuthContextValue {
  signedIn: boolean
  user: User | undefined
  signin(acessToken: string): void
  signout(): void
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN)

    return !!storedAccessToken
  })

  const { isError, isFetching, isSuccess, remove, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity
  })

  const queryClient = useQueryClient()

  const signin = useCallback((acessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, acessToken)

    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN)
    remove()

    queryClient.clear()

    setSignedIn(false)
  }, [remove])

  useEffect(() => {
    if (isError) {
      signout()
      toast.error('Sua sessão expirou!')
    }
  }, [isError, signout])

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        user: data,
        signin,
        signout
      }}
    >
      <LaunchScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  )
}
