import { Theme } from './theme';

type Theme = typeof Theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
