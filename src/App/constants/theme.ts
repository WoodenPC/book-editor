import { DefaultTheme } from 'styled-components';

/** значения переменных темы приложения */
export const APP_THEME: DefaultTheme = {
  colors: {
    grey1: '#F0F2F3',
    grey2: '#F2F2F2',
    grey3: '#E5E5E5',
    grey4: '#E6E6E6',
    grey5: '#D9D9D9',
    grey6: '#DBDBDB',
    grey7: '#CCCCCC',
    grey8: '#B3B3B3',
    grey9: '#7F7F7F',
    grey10: '#7F8285',
    grey11: '#595959',

    red: '#ff0000',

    black: '#000000',
    white: '#ffffff',

    modalBackground: 'rgba(0, 0, 0, 0.5)',

    green1: '#19966e',
    green2: '#16825f',
  },
  fontSize: {
    s: '13px',
    m: '15px',
    l: '16px',
    xl: '18px',
    xxl: '24px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints: {
    desktop: '1024px',
    tablet: '768px',
  },
};
