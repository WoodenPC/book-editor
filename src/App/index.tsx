import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { APP_THEME } from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={APP_THEME}>
      <div>app</div>
    </ThemeProvider>
  );
};

export default App;
