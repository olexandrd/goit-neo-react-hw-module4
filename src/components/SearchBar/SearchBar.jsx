import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-hot-toast";

import styles from "./SearchBar.module.css";
import { normalizeString } from "../../helpers/string";

const SearchBar = ({ searchHandler }) => {
  const validateSearchQuery = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchQuery.value;
    if (normalizeString(searchQuery) === "") {
      toast.error("Add search query!", { icon: "🔍" });
    } else {
      searchHandler(searchQuery);
    }
  };
  return (
    <>
      <header className={styles.header}>
        <form className={styles.searchForm} onSubmit={validateSearchQuery}>
          <input
            className={styles.searchFormInput}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.searchFormBtn} type="submit">
            <AiOutlineSearch />
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
