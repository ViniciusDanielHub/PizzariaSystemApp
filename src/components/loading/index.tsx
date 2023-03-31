import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import * as S from './styles'

export const Loading = () => {

  return (
    <S.Loading>
     <ActivityIndicator size={60} color="#fff"/>
    </S.Loading>
  );
};

