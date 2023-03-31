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

export const HeaderGoBack = styled.TouchableOpacity`
 ${({ theme }: DefaultTheme) => css`
     position: absolute;
     top: 48px;
     left: 24px;
  `}
`

export const TitleFinish = styled.Text`
 ${({ theme }: DefaultTheme) => css`
     font-size: ${theme.sizes.xlarge};
     color: ${theme.colors.white};
     font-weight: ${theme.font.bold};
     margin-bottom: ${theme.spacings.medium};
  `}
`

export const TableText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
     font-size: ${theme.sizes.xultralarge};
     color: ${theme.colors.white};
     font-weight: ${theme.font.bold};
  `}
`