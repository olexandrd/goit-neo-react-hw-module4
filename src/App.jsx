import { Toaster } from "react-hot-toast";
import { useState } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { normalizeString } from "./helpers/string";
import { fetchImages } from "./helpers/api";

const App = () => {
  const [page, setPage] = useState(1);
  const [imgArray, setImgArray] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchQuery = normalizeString(e.target.searchQuery.value);

    fetchImages({ query: searchQuery, page: page, per_page: 20 })
      .then((data) => {
        console.log(data);
        setImgArray((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Toaster />
      <SearchBar searchHandler={searchHandler} />
      <ImageGallery imgArray={imgArray} />
    </>
  );
};

export default App;
