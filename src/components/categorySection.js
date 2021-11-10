import { useContext } from "react";
import { MY_BOOKS_CONTEXT } from "../contexts/my_books_context";
import Book from "./book";
import BookList from "./bookList";
const CategorySection = ({ categoryName }) => {
  //variables
  const { myBooks } = useContext(MY_BOOKS_CONTEXT);

  return (
    <section className="mb-6 md:mb-16">
      <h2 className="text-3xl md:text-4xl">{categoryName}</h2>
      <hr className="my-6" />
      <BookList>
        {myBooks
          .filter((book) => {
            return (
              book.shelf.toLowerCase().replace(/ /g, "") ===
              categoryName.toLowerCase().replace(/ /g, "")
            );
          })
          .map((book) => {
            return <Book key={book.id} book={book}></Book>;
          })}
      </BookList>
    </section>
  );
};

export default CategorySection;
