import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import { normalizeString } from "./helpers/string";

const App = () => {
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(normalizeString(e.target.searchQuery.value));
  };

  return (
    <>
      <Toaster />
      <SearchBar searchHandler={searchHandler} />
    </>
  );
};

export default App;
