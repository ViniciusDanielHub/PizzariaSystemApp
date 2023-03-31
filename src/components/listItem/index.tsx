import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles'

interface ItemProps {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number
  },
  deleteItem: (item_id: string) => void
}

export const ListItem = ({data, deleteItem}: ItemProps) => {

  function handleDeleteItem() {
    deleteItem(data.id)
  }

  return (
    <S.Container>
      <S.ItemText>
        {data.amount}x - 
        {data.name}
      </S.ItemText>
      <TouchableOpacity onPress={handleDeleteItem}>
        <Icon name='trash-2' size={24} color='#ff3f4b' />
      </TouchableOpacity>
    </S.Container>
  );
};