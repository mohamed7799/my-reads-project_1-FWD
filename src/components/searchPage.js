import BookList from "./bookList";
import SearchBook from "./searchBook";
import { useState } from "react/cjs/react.development";
import { search } from "../api/BooksApi";
import Book from "./book";
import { useEffect } from "react";

import { useContext } from "react";
import { MY_BOOKS_CONTEXT } from "../contexts/my_books_context";
const SearchPage = () => {
  //variables
  const [searchedText, setSearchedText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { myBooks } = useContext(MY_BOOKS_CONTEXT);
  //functions
  const makeSearchRequest = async () => {
    const res = await search(searchedText);

    if (res.hasOwnProperty("error")) {
      setSearchResult(res.items);
    } else {
      setSearchResult(res);
    }
  };

  useEffect(() => {
    if (searchedText === "") {
      setSearchResult([]);
    } else {
      makeSearchRequest();
    }
  }, [searchedText]);

  return (
    <section className="max-w-6xl w-11/12 mx-auto">
      <SearchBook
        searchedText={searchedText}
        setSearchedText={setSearchedText}
      ></SearchBook>
      <BookList>
        {searchResult
          ? searchResult.map((book) => {
              return (
                <Book
                  key={book.id}
                  book={
                    myBooks.find((item) => {
                      return item.id === book.id;
                    })
                      ? myBooks.find((item) => {
                          return item.id === book.id;
                        })
                      : { ...book, shelf: "none" }
                  }
                ></Book>
              );
            })
          : ""}
      </BookList>
    </section>
  );
};

export default SearchPage;
