import { useEffect, useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StacKParamsList } from 'PizzariaSystemApp/src/routes/app.routes';

import { Button } from 'PizzariaSystemApp/src/components/button';
import { ModalPicker } from 'PizzariaSystemApp/src/components/modal';
import { ListItem } from 'PizzariaSystemApp/src/components/listItem';

import { api } from 'PizzariaSystemApp/src/services/api';

import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles'

type RouterDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  }
}

export type CategoryProps = {
  id: string;
  name: string;
}

export type ProductProps = {
  id: string;
  name: string;
}

export type ItemProps = {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
}


type OrderRouteProps = RouteProp<RouterDetailParams, 'Order'>

export const Order = () => {

  const route = useRoute<OrderRouteProps>()
  const navigation = useNavigation<NativeStackNavigationProp<StacKParamsList>>();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false)

  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [productSelected, setProductSelected] = useState<ProductProps>();
  const [modalProductVisible, setModalProductVisible] = useState(false)

  const [items, setItems] = useState<ItemProps[]>([])

  const [amount, setAmount] = useState('1');

  async function loadInfo(){
    const response = await api.get('/category');

    setCategory(response.data)
    setCategorySelected(response.data[0])
  }

  async function loadProducts() {
    const response = await api.get('/category/product', {
      params: {
        category_id: categorySelected?.id
      }
    });

    setProducts(response.data)
    setProductSelected(response.data[0])
  }

  useEffect(() => {
     loadInfo()
  }, [])

  useEffect(() => {
    loadProducts()
  }, [categorySelected])

  async function handleDeleteTableOrder() {
    try {

      const response = await api.delete('/order', {
        params: {
          order_id: route.params?.order_id
        }
      })

      navigation.goBack();

    } catch (err) {
      console.log(err)
    }
  }

  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item);
  }

  function handleChangeProduct(item: ProductProps) {
    setProductSelected(item);
  }

  async function handleAddItem() {
    const response = await api.post('/order/add', {
      order_id: route.params?.order_id,
      product_id: productSelected?.id,
      amount: Number(amount)
    })

    let data = {
      id: response.data.id,
      product_id: response.data.product_id as string,
      name: productSelected?.name as string,
      amount: String(response.data.amount)
    }

    setItems(oldArray => [...oldArray, data])
  }

  async function handleDeleteItem(item_id: string) {
    await api.delete('/order/remove', {
      params: {
        item_id: item_id
      } 
    })

    let removeItem = items.filter(item => {
      return (item.id !== item_id)
    })

    setItems(removeItem)
  }

  function handleFinishOrder() {
    navigation.navigate('FinishOrder', {
      number: route.params?.number,
      order_id: route.params?.order_id
    })
  }

  return (
     <S.Container>
      <S.HeaderOrder>

        <S.Title>Mesa {route.params.number}</S.Title>

        {items.length === 0 && (
          <TouchableOpacity onPress={handleDeleteTableOrder}>
            <Icon name='trash-2' size={24} color='#ff3f4b' />
          </TouchableOpacity>
        )}
      </S.HeaderOrder>

      {category.length !== 0 && (
        <S.InputCategoryAndProduct onPress={() => setModalCategoryVisible(true)}>
          <S.TextCategory>
            {categorySelected?.name}
          </S.TextCategory>
        </S.InputCategoryAndProduct>
      )}

      {products.length !== 0 && (
        <S.InputCategoryAndProduct onPress={() => setModalProductVisible(true)}>
          <S.TextCategory>
            {productSelected?.name}
          </S.TextCategory>
        </S.InputCategoryAndProduct>
      )}

      <S.QtdContainer>
        <S.QtdText>
          Quantidade
        </S.QtdText>

        <S.InputQtd
         placeholderTextColor="#F0F0F0"
         keyboardType="numeric"
         value={amount}   
         onChangeText={setAmount}
        >
        </S.InputQtd>
      </S.QtdContainer>

      <S.Actions>
        <S.ButtonAdd onPress={handleAddItem}>
          <S.ButtonText>+</S.ButtonText>
        </S.ButtonAdd>

        <S.ButtonAdvancedOrder 
        style={
          {
            opacity : items.length === 0 ? 0.3 : 1
           }
          } 
          disabled={items.length === 0}

          onPress={handleFinishOrder}
          >
          <S.ButtonText>Avançar</S.ButtonText>
        </S.ButtonAdvancedOrder>
      </S.Actions>

      <FlatList 
        showsVerticalScrollIndicator
        style={{flex: 1, marginTop: 24}}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => 
        <View style={{flex: 1, marginTop: 24}}>
        <ListItem data={item} deleteItem={handleDeleteItem}/>
        </View>
        }
      />
      
      <Modal
       transparent={true}
       visible={modalCategoryVisible}
       animationType="fade"
      >
      <ModalPicker 
        handleCloseModal={() => setModalCategoryVisible(false)}
        options={category}
        selectedItem={handleChangeCategory}
      />
      </Modal>

      <Modal
        transparent={true}
        visible={modalProductVisible}
        animationType="fade"
      >
        <ModalPicker
          handleCloseModal={() => setModalProductVisible(false)}
          options={products}
          selectedItem={handleChangeProduct}
        />
      </Modal>
    </S.Container>
  );
};

