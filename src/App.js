import AddBookButton from "./components/addBookButton";
import Header from "./components/header";
import SearchBook from "./components/searchBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header></Header>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <h2 className="text-2xl text-center m-4">
                this is the main page content
              </h2>
            }
          ></Route>

          <Route
            exact
            path="/search"
            element={<SearchBook></SearchBook>}
          ></Route>
        </Routes>

        <AddBookButton></AddBookButton>
      </main>
    </BrowserRouter>
  );
};

export default App;
