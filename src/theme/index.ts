import {DefaultTheme} from 'styled-components/native';
import {font} from './font';
import {colors} from './colors';
import {spacing} from './spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: typeof font;
    colors: typeof colors;
    spacing: typeof spacing;
  }
}

export const theme: DefaultTheme = {font, colors, spacing};
