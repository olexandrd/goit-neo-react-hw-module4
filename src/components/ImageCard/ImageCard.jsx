import styles from "./ImageCard.module.css";

const ImageCard = ({ thumbURL, description }) => {
  return (
    <div className={styles.imageCard}>
      <img src={thumbURL} alt={description} className={styles.imageCardImage} />
    </div>
  );
};

export default ImageCard;
