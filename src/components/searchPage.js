import BookList from "./bookList";
import SearchBook from "./searchBook";
import { useState } from "react/cjs/react.development";
import { search } from "../api/BooksApi";
import Book from "./book";
import { useEffect } from "react";
import _debounce from "lodash/debounce";
const SearchPage = () => {
  //varianles
  const [searchedText, setSearchedText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //functions
  const makeSearchRequest = _debounce(async () => {
    if (searchedText) {
      const res = await search(searchedText);

      if (res.hasOwnProperty("error")) {
        setSearchResult(res.items);
      } else {
        setSearchResult(res);
      }
    } else {
      setSearchResult([]);
    }
  }, 1000);

  useEffect(() => {
    makeSearchRequest();
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
              if (book.shelf) {
                return <Book key={book.id} book={book}></Book>;
              } else {
                return (
                  <Book key={book.id} book={{ ...book, shelf: "none" }}></Book>
                );
              }
            })
          : ""}
      </BookList>
    </section>
  );
};

export default SearchPage;
