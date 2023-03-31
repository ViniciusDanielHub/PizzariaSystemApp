import {View, Text, ScrollView } from 'react-native'

import { CategoryProps } from 'PizzariaSystemApp/src/screens/Order'

import * as S from './styles'

interface ModalPickerProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

export function ModalPicker({options, handleCloseModal, selectedItem}: ModalPickerProps) {

  function onPressItem(item:CategoryProps){
    selectedItem(item)

    handleCloseModal()

  }

  const option = options.map((item, index) => {
    return (
      <S.OptionContainer key={index} onPress={() => onPressItem(item)}>
        <S.TextOption>
          {item?.name}
        </S.TextOption>
      </S.OptionContainer>
    )

  })
  return(
    <S.ContainerModal onPress={handleCloseModal}>
      <S.Content>
        <ScrollView>
          {option}
        </ScrollView>
      </S.Content>
    </S.ContainerModal>
  )
}