const BookList = ({ children }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {children}
    </ul>
  );
};

export default BookList;
