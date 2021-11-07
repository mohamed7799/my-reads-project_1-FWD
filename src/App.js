import AddBookButton from "./components/addBookButton";
import Header from "./components/header";
import SearchBook from "./components/searchBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/mainContent";
import { MY_BOOKS_CONTEXT_PROVIDER } from "./contexts/my_books_context";
const App = () => {
  return (
    <BrowserRouter>
      <MY_BOOKS_CONTEXT_PROVIDER>
        <main>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<MainContent></MainContent>}></Route>

            <Route
              exact
              path="/search"
              element={<SearchBook></SearchBook>}
            ></Route>
          </Routes>

          <AddBookButton></AddBookButton>
        </main>
      </MY_BOOKS_CONTEXT_PROVIDER>
    </BrowserRouter>
  );
};

export default App;
