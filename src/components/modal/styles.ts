import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const ContainerModal = styled.TouchableOpacity`
  ${({ theme }: DefaultTheme) => css`
    flex:1;
    justify-content: center;
    align-items: center;
  `}
`
export const Content = styled.View`
 ${({ theme }: DefaultTheme) => css`
    width: 348px;
    height: 340px;
    background-color: #fff;
    border-width: 1px;
    border-color: #a8a8a8;
    border-radius: 8px;
  `}
`
export const TextModal = styled.Text`
${({ theme }: DefaultTheme) => css`

  `}
`

export const OptionContainer = styled.TouchableOpacity`
${({ theme }: DefaultTheme) => css`
     align-items: flex-start;
     border-top-width: 0.${theme.border.smallRadius};
     border-top-color: ${theme.colors.sixthColor};
  `}
`

export const TextOption = styled.Text`
${({ theme }: DefaultTheme) => css`
     margin: ${theme.spacings.xsmall};
     font-size: ${theme.sizes.large};
     font-weight: ${theme.font.bold};
     color: ${theme.colors.secondColor};
  `}
`