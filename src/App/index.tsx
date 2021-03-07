import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { APP_THEME } from './constants/theme';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import Header from './components/Header';
import { BooksContextProvider } from './components/BooksContext';

import { GlobalStyle, AppLayout } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={APP_THEME}>
      <GlobalStyle />
      <Router>
        <BooksContextProvider>
          <AppLayout>
            <Header />
            <Switch>
              <Route path="/" exact component={BooksPage} />
              <Route path="/createBook" component={BookPage} />
              <Route path="/book/:id" component={BookPage} />
            </Switch>
          </AppLayout>
        </BooksContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
