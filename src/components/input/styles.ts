import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    flex-direction: row;
    margin-top:${theme.spacings.medium};
  `}
`
export const Input = styled.TextInput`
 ${({ theme }: DefaultTheme) => css`
    width: 308px;
    height: ${theme.sizes.xxxxultralarge};
    color: ${theme.colors.white};
    padding-left:${theme.spacings.medium};
    background-color: ${theme.colors.secondColor};
    border-radius: ${theme.border.mediumRadius};
  `}
`

export const InputError = styled.TextInput`
`

export const AlignParentWithRow = styled.View`
`

export const TextInputError = styled.Text`
${({ theme }: DefaultTheme) => css`
    color: #C52F70;
    font-weight: 500;
    margin:-${theme.spacings.xsmall} 0 ${theme.spacings.small} 0;
  `}
`