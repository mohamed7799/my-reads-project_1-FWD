const BookList = ({ children }) => {
  return <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">{children}</ul>;
};

export default BookList;
