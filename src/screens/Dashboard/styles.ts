import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.SafeAreaView`
 ${({ theme }: DefaultTheme) => css`
     flex: 1;
     justify-content: center;
     background-color: ${theme.colors.primaryColor};
     align-items: center;
     padding: ${theme.spacings.small};
  `}
`

export const Title = styled.Text`
 ${({ theme }: DefaultTheme) => css`
     font-size: ${theme.sizes.xultralarge}
     font-weight: ${theme.font.bold};
     color: ${theme.colors.white};
  `}
`

export const Input = styled.TextInput`
 ${({ theme }: DefaultTheme) => css`
     width: 80%;
     height: 56px;
     background-color: ${theme.colors.secondColor};
     border-radius: ${theme.border.smallRadius};
     text-align: center;
     font-size: ${theme.sizes.xxlarge};
     color: ${theme.colors.white};
     margin: ${theme.spacings.medium};
  `}
`