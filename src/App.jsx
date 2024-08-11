import { Toaster } from "react-hot-toast";
import { useState } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { normalizeString } from "./helpers/string";
import { fetchImageRequest } from "./helpers/api";

const App = () => {
  const [page, setPage] = useState(1);
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchImages = async ({ query: searchQuery, page: page }) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImageRequest({
        query: searchQuery,
        page: page,
        per_page: 20,
      });
      setImgArray((prev) => [...prev, ...data.results]);
      setPage(page + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const searchQuery = normalizeString(e.target.searchQuery.value);

    fetchImages({ query: searchQuery, page: page });

    // fetchImages({ query: searchQuery, page: page, per_page: 20 })
    //   .then((data) => {
    //     console.log(data);
    //     setImgArray((prev) => [...prev, ...data.results]);
    //     setPage(page + 1);
    //   })
    //   .catch((error) => console.error(error));
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
