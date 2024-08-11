import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import { normalizeString } from "./helpers/string";
import { useState } from "react";
import { fetchImages } from "./helpers/api";

const App = () => {
  const [page, setPage] = useState(1);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchQuery = normalizeString(e.target.searchQuery.value);

    fetchImages({ query: searchQuery, page: page, per_page: 10 })
      .then((data) => {
        console.log(data);
        setPage(page + 1);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Toaster />
      <SearchBar searchHandler={searchHandler} />
    </>
  );
};

export default App;
