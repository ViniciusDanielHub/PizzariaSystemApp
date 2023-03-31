import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
  background-color: ${theme.colors.secondColor};
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${theme.spacings.small};
  border-radius: ${theme.border.smallRadius};
  border-width: 0.${theme.border.smallRadius};
  border-color: ${theme.colors.sixthColor};
  `}
`

export const ItemText = styled.Text`
  ${({ theme }: DefaultTheme) => css`
  color: #fff
  `}
`