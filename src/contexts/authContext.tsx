import React, {useState, createContext, ReactNode, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';
import { IAuthContextData, IAuthProviderProps, IAuthentication, IUser } from './types';

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({children}: IAuthProviderProps) {
  const [user, setUser] = useState<IUser>();

  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  const isAuthenticated = !!user?.name

  async function getUser() {
    const hasUser = getUserLocalStorage()

    if (Object.keys(hasUser).length > 0) {
      api.defaults.headers.common['Authorization'] = `Bearer ${(await hasUser).token}`

      setUser(await hasUser)
    }

    setLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  async function signIn({ email, password }: IAuthentication) {
    setLoadingAuth(true)

    try{
      const response = await LoginRequest(email,password);

      const payload = {
        id: response.id, 
        email: response.email, 
        name: response.name, 
        token: response.token
      }

      setUser(payload)

      setUserLocalStorage(payload)

      setLoadingAuth(false)

    }catch(err){
      console.log('erro ao acessar', err)
      setLoadingAuth(false)
    }
  }

 async function signOut() {
   await AsyncStorage.clear().then(() => {
    setUser({
      id: '',
      name: '',
      email: '',
      token: ''
    })
   })
 }

  return (
    <AuthContext.Provider value={{user, signIn, signOut, isAuthenticated, loading, loadingAuth}}>
     {children}
    </AuthContext.Provider>
  )
}