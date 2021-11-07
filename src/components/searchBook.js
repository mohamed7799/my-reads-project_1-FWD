import Button from "./button";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const SearchBook = () => {
  return (
    <section className="max-w-xl w-11/12 mx-auto my-8 flex gap-4">
      <Link to="/">
        <Button className="h-full capitalize rounded-md flex gap-2 px-3 items-center text-white font-medium">
          <FaArrowLeft></FaArrowLeft>
          back
        </Button>
      </Link>

      <input
        type="text"
        className="w-full px-4 py-2 rounded-md border-green-500 border border-opacity-50 focus:outline-none"
        placeholder="Title or Author"
      />
    </section>
  );
};

export default SearchBook;
