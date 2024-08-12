import styles from "./ImageCard.module.css";

const ImageCard = ({ thumbURL, description, id }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={thumbURL}
        alt={description}
        className={styles.imageCardImage}
        data-id={id}
      />
    </div>
  );
};

export default ImageCard;
