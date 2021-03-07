import React, { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';

import { BooksContextState } from './interfaces';
import { Book, BooksSortingRules } from '../../interfaces';
import { loadBooksFromStorage } from './utils/loadBooksFromStorage';
import { loadSortingRulesFromStorage } from './utils/loadSortingRulesFromStorage';
import { compareByTitle } from './utils/compareByTitle';
import { compareByPublicationYear } from './utils/compareByPublicationYear';
import { saveBooksToStorage } from './utils/saveBooksToStorage';
import { DEFAULT_SORTING_RULES, DEFAULT_BOOKS_CONTEXT } from './constants';
import { saveSortingRulesToStorage } from './utils/saveSortingRulesToStorage';

/** контекст книг */
const BooksContext = createContext<BooksContextState>(DEFAULT_BOOKS_CONTEXT);

/** провайдер контекста книг */
export const BooksContextProvider: FC = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [sortingRules, setSortingRules] = useState<BooksSortingRules>(DEFAULT_SORTING_RULES);

  useEffect(() => {
    const booksFromStorage = loadBooksFromStorage();
    if (Array.isArray(booksFromStorage)) {
      setBooks(loadBooksFromStorage());
    }

    const sortingRulesFromStorage = loadSortingRulesFromStorage();
    if (sortingRulesFromStorage) {
      setSortingRules(sortingRulesFromStorage);
    }
  }, []);

  useEffect(() => {
    saveBooksToStorage(books);
  }, [books]);

  useEffect(() => {
    const { byTitle, byPublicationYear } = sortingRules;
    const comparators: Array<(book1: Book, book2: Book) => boolean> = [];
    if (byTitle !== 'none') {
      comparators.push(compareByTitle(byTitle));
    }

    if (byPublicationYear !== 'none') {
      comparators.push(compareByPublicationYear(byPublicationYear));
    }

    if (comparators.length === 0) {
      return;
    }

    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      updatedBooks.sort((book1, book2) => {
        if (comparators.every((compareFunc) => compareFunc(book1, book2))) {
          return 1;
        } else {
          return -1;
        }
      });
      return updatedBooks;
    });
  }, [sortingRules]);

  const handleAddBook = useCallback((book: Book) => {
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks, book];
      saveBooksToStorage(updatedBooks);
      return updatedBooks;
    });
  }, []);

  const handleRemoveBook = useCallback((book: Book) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
  }, []);

  const handleUpdateBook = useCallback((book: Book) => {
    setBooks((prevBooks) => {
      const index = prevBooks.findIndex((b) => b.id === book.id);
      if (index === -1) {
        return prevBooks;
      }

      prevBooks[index] = { ...prevBooks[index], ...book };
      return [...prevBooks];
    });
  }, []);

  const handleSortByTitle = useCallback(() => {
    setSortingRules((prevSortingRules) => {
      const { byTitle } = prevSortingRules;
      const updatedSortingRules: BooksSortingRules = {
        ...prevSortingRules,
        byTitle: byTitle === 'asc' ? 'desc' : 'asc',
      };
      saveSortingRulesToStorage(updatedSortingRules);
      return updatedSortingRules;
    });
  }, []);

  const handleSortByPublicationYear = useCallback(() => {
    setSortingRules((prevSortingRules) => {
      const { byPublicationYear } = prevSortingRules;
      const updatedSortingRules: BooksSortingRules = {
        ...prevSortingRules,
        byPublicationYear: byPublicationYear === 'asc' ? 'desc' : 'asc',
      };
      saveSortingRulesToStorage(updatedSortingRules);
      return updatedSortingRules;
    });
  }, []);

  const contextValue = useMemo<BooksContextState>(
    () => ({
      handleAddBook,
      handleRemoveBook,
      handleUpdateBook,
      handleSortByTitle,
      handleSortByPublicationYear,
      books,
      sortingRules,
    }),
    [
      handleAddBook,
      handleRemoveBook,
      handleUpdateBook,
      handleSortByTitle,
      handleSortByPublicationYear,
      books,
      sortingRules,
    ],
  );

  return <BooksContext.Provider value={contextValue}>{children}</BooksContext.Provider>;
};

export default BooksContext;
