import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { APP_THEME } from './constants/theme';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import Header from './ui/Header';
import { BooksContextProvider } from './BooksContext';
import { GlobalStyle, AppLayout } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={APP_THEME}>
      <GlobalStyle />
      <Router>
        <BooksContextProvider>
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Header shouldDisplayAddNewBookButton />
                <BooksPage />
              </Route>
              <Route path="/createBook">
                <Header />
                <BookPage />
              </Route>
              <Route path="/book/:id">
                <Header shouldDisplayAddNewBookButton />
                <BookPage />
              </Route>
            </Switch>
          </AppLayout>
        </BooksContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
