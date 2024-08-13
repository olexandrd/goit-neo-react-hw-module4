import styles from "./ImageCard.module.css";

const ImageCard = ({ thumbURL, description, id, clickHandler }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={thumbURL}
        alt={description}
        className={styles.imageCardImage}
        data-id={id}
        onClick={clickHandler}
      />
    </div>
  );
};

export default ImageCard;
