import Modal from "react-modal";

import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ image, onClose, modalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      {image && (
        <div className={styles.stats}>
          <p className={styles.statsItem}>
            Likes ❤️ <span className={styles.statsValue}>{image.likes} </span>
          </p>
          <p className={styles.statsItem}>
            Author: <span className={styles.statsValue}>{image.user.name}</span>{" "}
          </p>
        </div>
      )}
    </Modal>
  );
}

export default ImageModal;
