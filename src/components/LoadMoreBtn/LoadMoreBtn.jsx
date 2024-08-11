import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreHandler }) => {
  return (
    <div className={styles.loadMore}>
      <button
        className={styles.loadMoreBtn}
        onClick={() => {
          loadMoreHandler();
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
