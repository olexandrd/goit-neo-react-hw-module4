import { Toaster } from "react-hot-toast";
import { useState } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { normalizeString } from "./helpers/string";
import { fetchImageRequest } from "./helpers/api";

const paginationPerPage = 20;

const App = () => {
  // const [paginationPage, setPage] = useState(1);
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchImages = async ({ query, page }) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImageRequest({
        query: query,
        page: page,
        per_page: paginationPerPage,
      });
      setImgArray((prev) => [...prev, ...data.results]);
      // setPage(page + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const searchQuery = normalizeString(e.target.searchQuery.value);

    setImgArray([]);
    fetchImages({ query: searchQuery, page: 1 });
  };

  return (
    <>
      <Toaster />
      <SearchBar searchHandler={searchHandler} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery imgArray={imgArray} />
    </>
  );
};

export default App;
