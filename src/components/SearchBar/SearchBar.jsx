import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchHandler }) => {
  return (
    <header className={styles.header}>
      <form className={styles.searchForm} onSubmit={searchHandler}>
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
  );
};

export default SearchBar;
