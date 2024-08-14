import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imgArray, clickHandler }) => {
  return (
    <ul className={styles.imageGallery}>
      {imgArray.map(
        ({
          id,
          description,
          urls: { small: thumbURL, regular },
          likes,
          user: { name: userName },
        }) => (
          <li key={id} className={styles.imageGalleryItem}>
            <ImageCard
              id={id}
              thumbURL={thumbURL}
              description={description}
              clickHandler={clickHandler}
              regular={regular}
              likes={likes}
              userName={userName}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default ImageGallery;
