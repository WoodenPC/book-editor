import 'styled-components';
import { APP_THEME } from '../App/constants/theme';

type AppTheme = typeof APP_THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
