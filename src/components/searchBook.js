import Button from "./button";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBook = ({ searchedText, setSearchedText }) => {
  return (
    <section className="max-w-2xl w-11/12 mx-auto my-8 md:flex md:gap-4 md:items-center">
      <Link to="/">
        <Button className="py-2 h-full capitalize rounded-md flex gap-2 px-3 items-center text-white font-medium">
          <FaArrowLeft></FaArrowLeft>
          back
        </Button>
      </Link>
      <div className="flex gap-2 w-full my-4">
        <input
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
          type="text"
          className="w-full px-4 py-2 rounded-md border-green-500 border border-opacity-50 focus:outline-none"
          placeholder="Title or Author"
        />
      </div>
    </section>
  );
};

export default SearchBook;
