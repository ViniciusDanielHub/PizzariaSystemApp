import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import { IUser } from './types';

export function setUserLocalStorage(user: IUser) {
  AsyncStorage.setItem("@PizzariaSystem:user", JSON.stringify(user));
}

export async function getUserLocalStorage() {
  const jsonUser = await AsyncStorage.getItem('@PizzariaSystem:user')

  const user: IUser = JSON.parse(jsonUser || '{}')

  return user;
}


export async function LoginRequest(email: string, password: string) {
  const res = await api.post('/session', {
    email,
    password
  })

  return res.data;
}

export async function ExitRequest() {
  AsyncStorage.removeItem("@PizzariaSystem:user");
}


