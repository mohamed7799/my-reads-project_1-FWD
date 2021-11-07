import { useEffect, useState } from "react";
import { update, getAll } from "../api/BooksApi";
import { useContext } from "react";
import { MY_BOOKS_CONTEXT } from "../contexts/my_books_context";
const Book = ({ book }) => {
  const { setMyBooks } = useContext(MY_BOOKS_CONTEXT);

  const [selectedShelf, setSelectedShelf] = useState(book.shelf);

  const changeShelf = async () => {
    try {
      const isUpdated = await update(book, selectedShelf);
      if (isUpdated) {
        const res = await getAll();
        setMyBooks(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(selectedShelf);
    changeShelf();
  }, [selectedShelf]);

  return (
    <li className="p-2 text-center">
      <select
        value={selectedShelf}
        onChange={(e) => setSelectedShelf(e.target.value)}
        className="mb-3"
        name="shelf"
      >
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want To Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
      <img
        className="mx-auto"
        src={book.imageLinks.thumbnail}
        alt="book-thumbnail"
      />
      <h4 className="text-xl text-gray-800 font-medium">{book.title}</h4>
      <h5 className="text-base text-gray-500">{book.authors.join(",")}</h5>
    </li>
  );
};

export default Book;
