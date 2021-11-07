import Button from "./button";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const AddBookButton = () => {
  return (
    <Link to="/search">
      <Button className="fixed right-6 p-4 bottom-6 sm:text-3xl rounded-full">
        <FaPlus color="white"></FaPlus>
      </Button>
    </Link>
  );
};

export default AddBookButton;
