import { Button } from 'PizzariaSystemApp/src/components/button';
import { Input } from 'PizzariaSystemApp/src/components/input';
import { Logo } from 'PizzariaSystemApp/src/components/logo';
import { AuthContext } from 'PizzariaSystemApp/src/contexts/authContext';
import { useContext, useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import * as S from './styles'

export const SignIn = () => {
  const {signIn, loadingAuth} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    await signIn({email, password})
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
        <Logo />

          <Input 
            placeholder='Digite Seu Email' 
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder='Digite Sua Senha' 
            secureTextEntry={true} 
            value={password}
            onChangeText={setPassword}
           />

          <Button text='Entrar' onPress={handleLogin} disabled={loadingAuth}/>
        </S.Container>
    </TouchableWithoutFeedback>
   </>
  );
};

