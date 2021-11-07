const Book = ({ book }) => {
  return (
    <li className="p-2 text-center">
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
