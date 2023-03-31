import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Loading = styled.View`
 ${({ theme }: DefaultTheme) => css`
    flex: 1;
    background-color: ${theme.colors.primaryColor};
    justify-content: center;
    align-items: center;
  `}
`