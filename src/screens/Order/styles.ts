import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
     flex: 1;
     background-color: ${theme.colors.primaryColor};
     padding: ${theme.spacings.medium};
  `}
`

export const HeaderOrder = styled.View`
 ${({ theme }: DefaultTheme) => css`
    flex-direction: row;
    margin: ${theme.spacings.medium} 0 ${theme.spacings.small} 0;
    align-items: center;
  `}
`

export const Title = styled.Text`
 ${({ theme }: DefaultTheme) => css`
     font-size: ${theme.sizes.xultralarge};
     font-weight: ${theme.font.bold};
     color: ${theme.colors.white};
     margin-right:${theme.spacings.small};
  `}
`

export const InputCategoryAndProduct = styled.TouchableOpacity`
 ${({ theme }: DefaultTheme) => css`
     background-color: ${theme.colors.secondColor};
     width: 100%;
     border-radius: ${theme.border.smallRadius};
     height: ${theme.spacings.xlarge};
     margin-bottom: ${theme.spacings.small};
     justify-content: center;
     padding: ${theme.spacings.xsmall};
  `}
`

export const TextCategory = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.large};
     font-weight: ${theme.font.bold};
     color: ${theme.colors.secondFontColor};
     margin-right:${theme.spacings.small};
  `}
`

export const TextProduct = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.large};
     font-weight: ${theme.font.bold};
     color: ${theme.colors.secondFontColor};
     margin-right:${theme.spacings.small};
  `}
`

export const QtdContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
  `}
`

export const QtdText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const InputQtd = styled.TextInput`
 ${({ theme }: DefaultTheme) => css`
     background-color: ${theme.colors.secondColor};
     text-align: center;
     width: 60%;
     border-radius: ${theme.border.smallRadius};
     height: ${theme.spacings.xlarge};
     margin-bottom: ${theme.spacings.small};
     justify-content: center;
     padding: ${theme.spacings.xsmall};
     color: ${theme.colors.white};
     font-size: ${theme.sizes.xlarge};
  `}
`

export const Actions = styled.View`
 ${({ theme }: DefaultTheme) => css`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `}
`

export const ButtonAdd = styled.TouchableOpacity`
 ${({ theme }: DefaultTheme) => css`
    width: 20%;
    background-color: ${theme.colors.fifthColor};
    border-radius: ${theme.border.smallRadius};
    height: ${theme.spacings.xlarge};
    justify-content: center;
    align-items: center;
  `}
`

export const ButtonText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.thirtyFontColor};
    font-size: ${theme.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const ButtonAdvancedOrder = styled.TouchableOpacity`
 ${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.fourthColor};
    border-radius: ${theme.border.smallRadius};
    height: ${theme.spacings.xlarge};
    width: 75%;
    align-items: center;
    justify-content: center;
  `}
`