import { ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './styles'

export type ButtonProps = {
  text?: string | object;
  children?: React.ReactNode;
  onPress?: () => void;
  color?: 'primary' | 'secondary';
  disabled?: boolean
}

export const Button = ({ text, children, onPress, disabled, color = 'primary' }: ButtonProps) => {
  return (
    <S.CustomizeButton
      activeOpacity={0.8}
      onPress={disabled ? () => { } : onPress}
      disabled={disabled}
      color={color}
    >
      <S.ContainerButton>
        {disabled ? (
          <ActivityIndicator
            animating={disabled}
            hidesWhenStopped={disabled}
            size={23}
            color='#fff'
          />
        ) : (
          <S.TextButton>{text}</S.TextButton>
        )}

      </S.ContainerButton>
    </S.CustomizeButton>
  );
};