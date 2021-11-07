import { useState, createContext, useEffect } from "react";
import { getAll } from "../api/BooksApi";
export const MY_BOOKS_CONTEXT = createContext({});

export const MY_BOOKS_CONTEXT_PROVIDER = ({ children }) => {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    getAll().then((res) => setMyBooks(res));
  }, []);

  return (
    <MY_BOOKS_CONTEXT.Provider value={{ myBooks, setMyBooks }}>
      {children}
    </MY_BOOKS_CONTEXT.Provider>
  );
};
