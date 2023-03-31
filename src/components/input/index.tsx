import React, { ReactElement, useState } from "react";

import { TouchableOpacity } from 'react-native';
import { inputErrorStyles } from "../../styles/inputErrorStyles";

import * as S from './styles'

export type InputProps = {
  nameIcon?: string
  sizeNumber?: number
  colorIcon?: string
  icon?: ReactElement | false
  placeholder?: string
  secureTextEntry?: boolean
  iconSecurePassword?: Object
  inputRef?: any
  returnKeyType?: string
  errorMessage?: any
  onBlur?: any
  value?: any
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
  onChangeText?: (text: any) => void;
  onChange?: (e: any) => void;
  onSubmitEditing?: () => void
}

export const Input = ({
  nameIcon,
  sizeNumber,
  colorIcon,
  iconSecurePassword,
  secureTextEntry,
  placeholder,
  inputRef,
  returnKeyType,
  keyboardType,
  onChangeText,
  onChange,
  errorMessage,
  onBlur,
  value,
  onSubmitEditing,
}: InputProps) => {

  return (
    <S.AlignParentWithRow>
      <S.Container>
        <S.Input
          ref={inputRef}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onChange={onChange}
          placeholderTextColor='#C0C0C0'
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          autoCorrect={false}
          autoCapitalize='none'
          errorMessage={errorMessage}
          onBlur={onBlur}
          value={value}
          style={[errorMessage ? inputErrorStyles.inputError : null]}
        >
        </S.Input>

      </S.Container>

      {errorMessage ? <S.TextInputError>{errorMessage}</S.TextInputError> : null}

    </S.AlignParentWithRow>
  );
};