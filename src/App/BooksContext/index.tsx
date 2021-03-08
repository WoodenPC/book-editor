import React, { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';

import { Book, BooksSortingRules } from '../interfaces';

import { BooksContextState } from './interfaces';
import { loadBooksFromStorage } from './utils/loadBooksFromStorage';
import { loadSortingRulesFromStorage } from './utils/loadSortingRulesFromStorage';
import { saveBooksToStorage } from './utils/saveBooksToStorage';
import { DEFAULT_SORTING_RULES, DEFAULT_BOOKS_CONTEXT } from './constants';
import { saveSortingRulesToStorage } from './utils/saveSortingRulesToStorage';
import { getSortedBooks } from './utils/getSortedBooks';

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

  const handleAddBook = useCallback((book: Book) => {
    setBooks((prevBooks) => {
      const updatedBooks = [book, ...prevBooks];
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
        byPublicationYear: 'none',
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
        byTitle: 'none',
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
      handleGetSortedBooks: getSortedBooks,
    }),
    [
      handleAddBook,
      handleRemoveBook,
      handleUpdateBook,
      handleSortByTitle,
      handleSortByPublicationYear,
      books,
      sortingRules,
      getSortedBooks,
    ],
  );

  return <BooksContext.Provider value={contextValue}>{children}</BooksContext.Provider>;
};

export default BooksContext;
