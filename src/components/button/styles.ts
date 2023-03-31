import styled, { css, DefaultTheme } from 'styled-components/native';
import { ButtonProps } from '../button/index'

const COLOR = {
  primary: css`
    color: #EEE4FF;
    background-color:#D24040;
  `,
  secondary: css`
    color: #0000;
    background-color: #76E7B0;
  `,
};

const DISABLED = css`
  background: #DC7070;
  color: #000;
`;

export const CustomizeButton = styled.TouchableOpacity<ButtonProps>`
${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.secondColor};
    elevation: 0;
    width: 240px;
    padding: 12px;
    border-radius: ${theme.border.hugeRadius};
    margin-top:${theme.sizes.xxlarge};
  ${(props: ButtonProps) => props.color && COLOR[props.color]}
  ${(props: ButtonProps) => props.disabled && DISABLED}
 `}
`

export const ContainerButton = styled.View<ButtonProps>`
`

export const TextButton = styled.Text<ButtonProps>`
 ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.large};
  ${(props: ButtonProps) => props.color && COLOR[props.color]}
    font-weight: ${theme.font.bold};
    text-align: center;
  `}
`