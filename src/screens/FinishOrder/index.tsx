import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StacKParamsList } from 'PizzariaSystemApp/src/routes/app.routes';

import { Button } from "PizzariaSystemApp/src/components/button";

import Icon from 'react-native-vector-icons/AntDesign';

import * as S from './styles'
import { api } from 'PizzariaSystemApp/src/services/api';

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export const FinishOrder = () => {
  const route = useRoute<FinishOrderRouteProp>()
  const navigation = useNavigation<NativeStackNavigationProp<StacKParamsList>>()

  async function handleFinish() {
    try{
      await api.put('/order/send', {
        order_id: route.params?.order_id
      })

      navigation.popToTop();
      
    } catch(err) {
      console.log('Erro ao atualizar')
    }
  }

  return(
    <S.Container>
      <S.HeaderGoBack onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={24} color="#D24040"/>
      </S.HeaderGoBack>
      <S.TitleFinish>Voce deseja finalizar este pedido?</S.TitleFinish>
      <S.TableText>Mesa {route.params?.number}</S.TableText>

      <Button text='Finalizar Pedido' color="secondary" onPress={handleFinish} />
    </S.Container>
  )
}