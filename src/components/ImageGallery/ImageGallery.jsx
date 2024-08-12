import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imgArray, clickHandler }) => {
  return (
    <ul className={styles.imageGallery} onClick={clickHandler}>
      {imgArray.map(({ id, description, urls: { small: thumbURL } }) => (
        <li key={id} className={styles.imageGalleryItem}>
          <ImageCard id={id} thumbURL={thumbURL} description={description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
