import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { APP_THEME } from './constants/theme';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import CreateBookPage from './pages/CreateBookPage';
import Header from './components/Header';

import { GlobalStyle, AppLayout } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={APP_THEME}>
      <GlobalStyle />
      <Router>
        <AppLayout>
          <Header />
          <Switch>
            <Route path="/" exact component={BooksPage} />
            <Route path="/createBook" component={CreateBookPage} />
            <Route path="/book/:id" component={BookPage} />
          </Switch>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
