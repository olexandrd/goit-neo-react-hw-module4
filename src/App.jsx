import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { normalizeString } from "./helpers/string";
import { imageRequest } from "./helpers/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const paginationPerPage = 20;

const App = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [imgArray, setImgArray] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const searchHandler = (submittedQuery) => {
    const searchQuery = normalizeString(submittedQuery);
    setSearchQuery(searchQuery);
    setImgArray([]);
    setPaginationPage(1);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await imageRequest({
          query: searchQuery,
          page: paginationPage,
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
    fetchData();
  }, [searchQuery, paginationPage]);

  useEffect(() => {
    if (imgArray.length > 0 && paginationPage < totalPages) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  }, [paginationPage, totalPages, imgArray]);

  const loadMoreHandler = async () => {
    setPaginationPage((prev) => prev + 1);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal(e) {
    if (e.target.tagName !== "IMG") return;
    setSelectedImg(imgArray.filter((img) => img.id === e.target.dataset.id)[0]);
    setModalIsOpen(true);
  }

  // useEffect(() => {
  //   if (selectedImg) {
  //     setModalIsOpen(true);
  //   }
  // }, [selectedImg]);

  return (
    <>
      <Toaster />
      {
        <ImageModal
          modalIsOpen={modalIsOpen}
          onClose={closeModal}
          image={selectedImg}
        />
      }
      <SearchBar searchHandler={searchHandler} />
      {error && <ErrorMessage />}
      <ImageGallery imgArray={imgArray} clickHandler={openModal} />
      {loading && <Loader />}
      {loadMore && <LoadMoreBtn loadMoreHandler={loadMoreHandler} />}
    </>
  );
};

export default App;
