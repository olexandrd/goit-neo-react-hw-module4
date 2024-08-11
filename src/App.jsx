import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { normalizeString } from "./helpers/string";
import { fetchImageRequest } from "./helpers/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const paginationPerPage = 20;

const App = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [imgArray, setImgArray] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      fetchImages({ query: searchQuery, page: 1 });
    }
  }, [searchQuery]);

  useEffect(() => {
    if (imgArray.length > 0 && paginationPage < totalPages) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  }, [paginationPage, totalPages, imgArray]);

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
      setTotalPages(data.total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    // const searchQuery = normalizeString(e.target.searchQuery.value);
    setSearchQuery(normalizeString(e.target.searchQuery.value));
    setImgArray([]);
    setPaginationPage(1);
  };

  const loadMoreHandler = async () => {
    setPaginationPage((prev) => prev + 1);
    await fetchImages({ query: searchQuery, page: paginationPage + 1 });
  };

  return (
    <>
      <Toaster />
      <SearchBar searchHandler={searchHandler} />
      {error && <ErrorMessage />}
      <ImageGallery imgArray={imgArray} />
      {loading && <Loader />}
      {loadMore && <LoadMoreBtn loadMoreHandler={loadMoreHandler} />}
    </>
  );
};

export default App;
