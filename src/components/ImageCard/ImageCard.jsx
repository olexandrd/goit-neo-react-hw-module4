import styles from "./ImageCard.module.css";

const ImageCard = ({
  thumbURL,
  description,
  id,
  clickHandler,
  regular,
  likes,
  userName,
}) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={thumbURL}
        alt={description}
        className={styles.imageCardImage}
        data-id={id}
        data-regular-url={regular}
        data-likes={likes}
        data-username={userName}
        onClick={clickHandler}
      />
    </div>
  );
};

export default ImageCard;
