import { useContext, useState } from 'react';
import {
  Alert,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StacKParamsList } from 'PizzariaSystemApp/src/routes/app.routes';

import { Button } from 'PizzariaSystemApp/src/components/button';

import { api } from 'PizzariaSystemApp/src/services/api';

import * as S from './styles'

export const Dashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StacKParamsList>>();

  const [number, setNumber] = useState('')

  async function openOrder() {
    const response = await api.post('/order', {
      table: Number(number)
    })

    navigation.navigate('Order', {number: number, order_id: response.data.id})

    setNumber('');
  }

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  }

  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>

          <S.Title>Novo Pedido</S.Title>

          <S.Input 
            placeholder='Número da mesa' 
            placeholderTextColor='#acacac' 
            keyboardType='numeric'
            value={number}
            onChangeText={setNumber}
          />

          <Button text='Abrir Mesa' onPress={openOrder}/>

          <Button text='logout' onPress={clearAsyncStorage} />

        </S.Container>
      </TouchableWithoutFeedback>
  </>
  );
};

