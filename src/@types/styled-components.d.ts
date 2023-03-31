import theme from '../styles'

type Theme = typeof theme.globalStyles

declare module "styled-components" {
  export interface DefaultTheme extends Theme { }
}