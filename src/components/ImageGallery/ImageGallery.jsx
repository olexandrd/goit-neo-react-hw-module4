import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imgArray }) => {
  return (
    <ul className={styles.imageGallery}>
      {imgArray.map(({ id, description, urls: { small: thumbURL } }) => (
        <li key={id} className={styles.imageGalleryItem}>
          <ImageCard thumbURL={thumbURL} description={description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
